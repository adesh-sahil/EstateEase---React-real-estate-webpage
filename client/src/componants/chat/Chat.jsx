import { useContext, useEffect, useRef, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Chat({ chats, allUsers }) {
  const [chat, setChat] = useState(null);
  const [showUserList, setShowUserList] = useState(false);
  const [error, setError] = useState(null);
  const [chatsList, setChatsList] = useState(chats); 
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);


  const messageEndRef = useRef();

  const decrease = useNotificationStore((state) => state.decrease);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // Debugging: Check if allUsers contains data
  useEffect(() => {
    console.log("All users available for chat:", allUsers);
  }, [allUsers]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setChat({ ...res.data, receiver });
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewChat = async (receiverId) => {
    try {
      const res = await apiRequest.post("/chats", { receiverId });
      if (res.status === 200) {
        // Fetch updated chats after creating a new chat
        const updatedChats = await apiRequest.get('/chats');
        setChat(res.data);
        setChatsList(updatedChats.data);
        setShowUserList(false);
      } else {
        setError("Failed to start chat.");
      }
    } catch (err) {
      console.log(err);
      setError("Failed to start chat.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read/" + chat.id);
      } catch (err) {
        console.log(err);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      });
    }
    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id === c.id
                  ? "white"
                  : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver.avatar || "/No-avatar.png"} alt="" />
            <span>{c.receiver.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
        <button 
          onClick={() => setShowUserList(!showUserList)}
          style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          New Chat
        </button>
        {showUserList && (
          <div
            className="userList"
            style={{
              marginTop: '10px',
              border: '1px solid #ccc',
              padding: '10px',
              backgroundColor: '#f9f9f9',
              maxHeight: '200px',
              overflowY: 'auto',
              width: '100%', // Ensures the list takes up full width
            }}
          >
            {allUsers.length === 0 ? (
              <p>No users available to chat with.</p>
            ) : (
              allUsers.filter(user => user.id !== currentUser.id).map(user => (
                <div 
                  key={user.id} 
                  onClick={() => handleNewChat(user.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #ccc'
                  }}
                >
                  <img 
                    src={user.avatar || "/No-avatar.png"} 
                    alt="" 
                    style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50%' }}
                  />
                  <span>{user.username}</span>
                </div>
              ))
            )}
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "No-avatar.png"} alt="" />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatMessage"
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left",
                }}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;

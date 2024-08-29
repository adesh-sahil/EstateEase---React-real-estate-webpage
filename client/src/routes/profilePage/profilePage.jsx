import Chat from "../../componants/chat/Chat";
import List from "../../componants/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import BounceLoader from "react-spinners/BounceLoader";

function ProfilePage() {
  const data = useLoaderData();

  const { updateUser, currentUser } = useContext(AuthContext);

  const [chats, setChats] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchChats = async () => {
      const res = await apiRequest.get('/chats');
      setChats(res.data);
    };
    
    const fetchUsers = async () => {
      const res = await apiRequest.get('/users');
      setAllUsers(res.data);
    };

    fetchChats();
    fetchUsers();
  }, []);


  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  
  const Loader = () => (
    <div className="loader-container">
      <BounceLoader color={"#3498db"} size={150} />
    </div>
  );

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "No-avatar.png"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>
              {" "}
              <i className="fa-solid fa-arrow-right-from-bracket"></i>Logout
            </button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <Suspense fallback={<Loader />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<Loader />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<Loader />}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} allUsers={allUsers}/>}
            </Await>
          </Suspense>
        </div>


      </div>
    </div>
  );
}

export default ProfilePage;

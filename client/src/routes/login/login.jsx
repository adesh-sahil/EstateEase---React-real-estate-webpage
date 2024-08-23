import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);

      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register-page">
      <div className="row">
        <div className="register-left">
          <h1>Welcome Back to <span>Estate Ease!</span></h1>
          <p>
            Log in to access your account and explore the latest property
            listings. Your dream home is just a few clicks away.
          </p>

          <ul>
            <li>Access exclusive property listings.</li>
            <li>Save and manage your favorite properties.</li>
            <li>Receive personalized recommendations.</li>
            <li>Get alerts for new properties matching your criteria.</li>
          </ul>

          <div className="testimonial">
            <p>
              “Estate Ease made my home-buying experience effortless. I found
              the perfect place in no time!”
            </p>
            <span>— Sarah D.</span>
          </div>

          <p className="cta">
            New here? <Link to="/register">Create an account</Link> and start your
            journey with us.
          </p>
        </div>

        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2>Welcome Back!!</h2>
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  minLength={3}
                  maxLength={20}
                  required
                />
                <span>Username</span>
              </div>

              <div className="input-box">
                <input type="password" name="password" required />
                <span>Password</span>
              </div>

              <button disabled={isLoading} type="submit">
                Login
              </button>
              {error && <span>{error}</span>}
            </form>
            <p className="login-link">
              New user? <Link to="/register">SIGN UP HERE</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

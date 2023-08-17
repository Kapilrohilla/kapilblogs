import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const anchorTagCSS = {
    color: "inherit",
    textDecoration: "none",
  };
  return (
    <div className="login">
      <span className="registerTitle">Login</span>
      <div className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">
          <Link to="/register" style={anchorTagCSS}>
            Register
          </Link>
        </button>
      </div>
    </div>
  );
}

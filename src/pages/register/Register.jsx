import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const anchorTagCSS = {
    color: "inherit",
    textDecoration: "none",
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <div className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">
          <Link to="/login" style={anchorTagCSS}>
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}

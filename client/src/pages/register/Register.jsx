import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import userServices from "../../services/user_services";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const anchorTagCSS = {
    color: "inherit",
    textDecoration: "none",
  };

  const createUser = (e) => {
    e.preventDefault();
    userServices.createuser(formData);
    setFormData(formData);
    navigate("/login");
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={(e) => createUser(e)}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">
          <Link to="/login" style={anchorTagCSS}>
            Login
          </Link>
        </button>
      </form>
    </div>
  );
}

import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import userServices from "../../services/user_services";
import { useContext, useState } from "react";
import DataProvider from "../../contexts/DataProvider";

const anchorTagCSS = {
  color: "inherit",
  textDecoration: "none",
};

export default function Login() {
  const [loginCredential, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const globalStates = useContext(DataProvider);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await userServices.login(loginCredential);
    globalStates.setUser(response);
    window.localStorage.setItem("loggedInUser", JSON.stringify(response));
    alert(`${response.username} logged in successfully`);
    navigate("/");
  };
  return (
    <div className="login">
      <span className="registerTitle">Login</span>
      <form className="loginForm" onSubmit={(e) => handleLogin(e)}>
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          value={loginCredential.email}
          onChange={(e) =>
            setLoginCredentials({
              ...loginCredential,
              email: e.target.value,
            })
          }
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          value={loginCredential.password}
          onChange={(e) =>
            setLoginCredentials({
              ...loginCredential,
              password: e.target.value,
            })
          }
        />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton" type="submit">
          <Link to="/register" style={anchorTagCSS}>
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}

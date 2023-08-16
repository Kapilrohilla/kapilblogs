import "./Login.css";

export default function Login() {
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
        <button className="loginRegisterButton">Register</button>
      </div>
    </div>
  );
}

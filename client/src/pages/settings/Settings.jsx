import "./Settings.css";
import Sidebar from "../../component/Sidebar/Sidebar";
// icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label> Profile Picture</label>
          <div className="settingsPP">
            <img src="" alt="" />
            <label htmlFor="fileInput">
              <AccountCircleIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "lightcoral",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "10px",
                }}
              />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>email</label>
          <input type="text" placeholder="Safak@xyz.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

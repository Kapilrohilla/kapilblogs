import "./Settings.css";
import Sidebar from "../../component/Sidebar/Sidebar";
// icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, useLocation } from "react-router-dom";
import DataProvider from "../../contexts/DataProvider";
import { useContext, useEffect, useState } from "react";
import user_services from "../../services/user_services";

export default function Setting() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.replace("/settings/", "");
  const globalStates = useContext(DataProvider);
  console.log(globalStates.blogs);
  const [newImage, setNewImage] = useState("");
  const [userDetailToUpdate, setUserDetailToUpdate] = useState({
    username: "",
    email: "",
    password: "",
    profilePic: "",
  });

  // FIXME text body are unable to update
  const handleUpdateUserDetail = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profilePic", userDetailToUpdate.profilePic);
    formData.append("username", userDetailToUpdate.username);
    formData.append("email", userDetailToUpdate.email);
    formData.append("password", userDetailToUpdate.password);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${JSON.parse(
          window.localStorage.getItem("token")
        )}`,
      },
    };
    const response = await user_services.updateUser(formData, config, id);
    console.log(response);
    globalStates.setUser(response);
    window.localStorage.setItem("loggedInUser", JSON.stringify(response));
    navigate("/");
  };
  // FIXME deleting a user unable to delete blog by that user on frontend
  const handleDeleteUser = async () => {
    const isDelete = confirm("all blogs will also be deleted");
    if (!isDelete) {
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          window.localStorage.getItem("token")
        )}`,
      },
    };
    try {
      const response = await user_services.deleteUser(id, config);
      const updateBlogState = globalStates.blogs.filter((blog) => {
        return blog.user.username !== response.username;
      });
      globalStates.setBlogs(updateBlogState);
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("token");
      globalStates.setUser(null);
      navigate("/register");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setUserDetailToUpdate({
      username: globalStates.user.username,
      email: globalStates.user.email,
      profilePic: newImage,
      password: "",
    });
    setNewImage(`http://localhost:3000/${globalStates.user.profilePic}`);
  }, []);
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your Account</span>
          <span className="settingDeleteTitle" onClick={handleDeleteUser}>
            Delete Account
          </span>
        </div>
        <form
          className="settingsForm"
          onSubmit={(e) => handleUpdateUserDetail(e)}
        >
          <label> Profile Picture</label>
          <div className="settingsPP">
            <img src={`${newImage}`} alt={globalStates.user.username} />
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
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => {
                setUserDetailToUpdate({
                  ...userDetailToUpdate,
                  profilePic: e.target.files[0],
                });
                if (e.target.files[0]) {
                  setNewImage(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Safak"
            value={userDetailToUpdate.username}
            onChange={(e) => {
              setUserDetailToUpdate({
                ...userDetailToUpdate,
                username: e.target.value,
              });
            }}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Safak@xyz.com"
            value={userDetailToUpdate.email}
            onChange={(e) => {
              setUserDetailToUpdate({
                ...userDetailToUpdate,
                email: e.target.value,
              });
            }}
          />
          <label>Update password</label>
          <input
            type="password"
            value={userDetailToUpdate.password}
            onChange={(e) => {
              setUserDetailToUpdate({
                ...userDetailToUpdate,
                password: e.target.value,
              });
            }}
          />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

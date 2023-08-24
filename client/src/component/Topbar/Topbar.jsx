import "./Topbar.css";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import { useContext } from "react";
import DataProvider from "../../contexts/DataProvider";

const topBarIconsCSS = {
  color: "#444",
  marginRight: "10px",
  fontSize: "20px",
  cursor: "pointer",
};
const searchBarIconCSS = {
  fontSize: "18px",
  color: "#666",
  cursor: "pointer",
  marginLeft: "15px",
};
const anchorTagCSS = {
  color: "inherit",
  textDecoration: "none",
};

const Topbar = () => {
  const globalStates = useContext(DataProvider);
  // const user = false;
  function handleLogout() {
    globalStates.setUser(null);
    window.localStorage.removeItem("loggedInUser");
  }
  return (
    <div className="top">
      <div className="topLeft">
        <FacebookIcon sx={topBarIconsCSS} />
        <TwitterIcon sx={topBarIconsCSS} />
        <InstagramIcon sx={topBarIconsCSS} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={anchorTagCSS}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={anchorTagCSS}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={anchorTagCSS}>
              CONCTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" style={anchorTagCSS}>
              WRITE
            </Link>
          </li>
          {globalStates.user && (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {globalStates.user ? (
          <img className="topImg" src="" alt="" />
        ) : (
          <ul className="topListItem">
            <Link to="/login" style={anchorTagCSS}>
              LOGIN
            </Link>
            <Link
              to="/register"
              style={{ ...anchorTagCSS, marginLeft: "15px" }}
            >
              REGISTER
            </Link>
          </ul>
        )}
        <SearchIcon sx={searchBarIconCSS} />
      </div>
    </div>
  );
};

export default Topbar;

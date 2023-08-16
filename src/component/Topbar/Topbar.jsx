import "./Topbar.css";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
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
  return (
    <div className="top">
      <div className="topLeft">
        <FacebookIcon sx={topBarIconsCSS} />
        <TwitterIcon sx={topBarIconsCSS} />
        <InstagramIcon sx={topBarIconsCSS} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="" alt="" />
        <SearchIcon sx={searchBarIconCSS} />
      </div>
    </div>
  );
};

export default Topbar;

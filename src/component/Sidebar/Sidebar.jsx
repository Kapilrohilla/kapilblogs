import "./Sidebar.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Sidebar() {
  const sideBarIconsCSS = {
    fontSize: "16px",
    marginLeft: "10px",
    cursor: "pointer",
  };
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          incidunt natus corrupti cum enim similique necessitatibus ipsum quis
          quae neque.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sitebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FacebookIcon sx={sideBarIconsCSS} />
          <TwitterIcon sx={sideBarIconsCSS} />
          <InstagramIcon sx={sideBarIconsCSS} />
        </div>
      </div>
    </div>
  );
}

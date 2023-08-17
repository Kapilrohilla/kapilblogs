import { Link } from "react-router-dom";
import "./Post.css";

export default function Post() {
  const anchorTagCSS = { textDecoration: "none", color: "inherit" };
  return (
    <div className="post">
      <img className="postImg" src="" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link to="/single" style={anchorTagCSS}>
            Lorem ipsum dolor sit
          </Link>
        </span>
        <hr />
        <span className="postDate">3 hour ago</span>
      </div>
      <p className="postDisc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam
        libero natus sequi vero impedit in velit ad! Neque, sunt.
      </p>
    </div>
  );
}

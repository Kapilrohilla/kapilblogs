/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Post.css";
export default function Post({ blog }) {
  const anchorTagCSS = { textDecoration: "none", color: "inherit" };
  return (
    <div className="post">
      <img
        className="postImg"
        src={`http://localhost:3000/${blog.photo}`}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link to={"/post/" + blog.id} style={anchorTagCSS}>
            {blog.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">3 hour ago</span>
      </div>
      <p className="postDisc">{blog.desc}</p>
    </div>
  );
}

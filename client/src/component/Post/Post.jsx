/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Post.css";
// parser for string to html
import parse from "html-react-parser";
export default function Post({ blog }) {
  const anchorTagCSS = { textDecoration: "none", color: "inherit" };
  return (
    <div className="post">
      <img
        className="postImg"
        src={`http://localhost:3000/${blog.photo}`}
        alt=""
      />
      <div className="postInfo" style={{ paddingInline: "10px" }}>
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
        <span className="postDate">
          {new Date(blog.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDisc">{parse(blog.desc)}</p>
    </div>
  );
}

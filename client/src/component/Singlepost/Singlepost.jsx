/* eslint-disable react/prop-types */
import "./Singlepost.css";

// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Singlepost({ post }) {
  console.log("--------post-----------");
  console.log(post);
  console.log("--------post-----------");

  const singlePostEditIconCss = {
    marginLeft: "10px",
    cursor: "pointer",
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={`http://localhost:3000/${post.photo}`}
          alt=""
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        {post.title}{" "}
        <div className="singlePostEdit">
          <EditIcon sx={{ ...singlePostEditIconCss, color: "teal" }} />
          <DeleteIcon sx={{ ...singlePostEditIconCss, color: "tomato" }} />
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>{post.user[0].username}</b>
        </span>
        <span className="singlePostDate">1 hr ago</span>
      </div>
      <p className="singlePostDesc">{post.desc}</p>
    </div>
  );
}

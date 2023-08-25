/* eslint-disable react/prop-types */
import "./Singlepost.css";
import { useContext } from "react";
import DataProvider from "../../contexts/DataProvider";
// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import blogs_services from "../../services/blogs_services";

const singlePostEditIconCss = {
  marginLeft: "10px",
  cursor: "pointer",
};

export default function Singlepost({ post }) {
  const globalStates = useContext(DataProvider);
  async function handleDelete() {
    const config = {
      headers: {
        Authorization: `Bearer ${globalStates.user.token}`,
      },
    };
    await blogs_services.deleteBlog(post.id, config);
    // update globalStates.blogs, navigate to homepage
  }
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
        {post.title}
        <div className="singlePostEdit">
          {globalStates.user !== null &&
          globalStates.user.username === post.user[0].username ? (
            <>
              <EditIcon sx={{ ...singlePostEditIconCss, color: "teal" }} />
              <DeleteIcon
                sx={{ ...singlePostEditIconCss, color: "tomato" }}
                onClick={handleDelete}
              />
            </>
          ) : (
            "Edit options aren't available for you"
          )}
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

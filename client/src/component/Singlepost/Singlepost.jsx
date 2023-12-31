/* eslint-disable react/prop-types */
import "./Singlepost.css";
import { useContext } from "react";
import DataProvider from "../../contexts/DataProvider";
import { useNavigate } from "react-router-dom";
// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import blogs_services from "../../services/blogs_services";

// parse string to jsx
import parse from "html-react-parser";

const singlePostEditIconCss = {
  marginLeft: "10px",
  cursor: "pointer",
};

export default function Singlepost({ post }) {
  console.log(post);
  const navigate = useNavigate();
  const globalStates = useContext(DataProvider);
  const token = "Bearer " + JSON.parse(localStorage.getItem("token"));
  async function handleDelete() {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    await blogs_services.deleteBlog(post.id, config);
    const afterRemoveBlogs = globalStates.blogs.filter((blog) => {
      return blog.id !== post.id;
    });
    alert(`${post.title} - deleted successful🥲`);
    globalStates.setBlogs(afterRemoveBlogs);
    navigate("/");
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={`https://kapilblogs-backend.onrender.com/${post.photo}`}
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            {globalStates.user !== null &&
            globalStates.user.username === post.user.username ? (
              <>
                <EditIcon sx={{ ...singlePostEditIconCss, color: "teal" }} />
                <DeleteIcon
                  sx={{ ...singlePostEditIconCss, color: "tomato" }}
                  onClick={handleDelete}
                />
              </>
            ) : (
              "unauthorized to edit"
            )}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.user.username}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{parse(post.desc)}</p>
      </div>
    </div>
  );
}

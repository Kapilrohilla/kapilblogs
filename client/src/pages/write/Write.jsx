import { useContext, useState } from "react";
import "./Write.css";
import AddIcon from "@mui/icons-material/Add";
import blogs_services from "../../services/blogs_services";
import DataContext from "../../contexts/DataProvider";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    blogImg: "",
  });
  const navigate = useNavigate();
  const globalStates = useContext(DataContext);
  const handleSubmitBlog = async (e) => {
    e.preventDefault();

    const blogData = new FormData();
    blogData.append("title", newBlog.title);
    blogData.append("desc", newBlog.description);
    blogData.append("blogImg", newBlog.blogImg);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${globalStates.user.token}`,
      },
    };
    const responseData = await blogs_services.createBlog(blogData, config);
    globalStates.setBlogs(globalStates.blogs.concat(responseData));
    navigate("/");
  };
  return (
    <div className="write">
      <div className="writeImgContainer">
      {newBlog.blogImg && (
        <img src={URL.createObjectURL(newBlog.blogImg)} className="writeImg" />
        )}
      </div>
        <button className="writeSubmit">Publish</button>
      <form className="writeForm" onSubmit={handleSubmitBlog}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <AddIcon
              sx={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                border: "1px solid",
                fontSize: "20px",
                color: "rgb(121, 118, 118)",
                cursor: "pointer",
              }}
            />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => {
              setNewBlog({
                ...newBlog,
                blogImg: e.target.files[0],
              });
            }}
          />
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
            value={newBlog.title}
            onChange={(e) =>
              setNewBlog({
                ...newBlog,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="tell your story"
            type="text"
            className="writeInput writeText"
            value={newBlog.description}
            onChange={(e) =>
              setNewBlog({
                ...newBlog,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>
      </form>
    </div>
  );
}

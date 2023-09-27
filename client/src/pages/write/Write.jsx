import { useContext, useRef, useState } from "react";
import "./Write.css";
import AddIcon from "@mui/icons-material/Add";
import blogs_services from "../../services/blogs_services";
import DataContext from "../../contexts/DataProvider";
import { useNavigate } from "react-router-dom";

// Rich text editor
import JoditEditor from "jodit-react";

export default function Write() {
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    blogImg: "",
  });
  const editor = useRef(null);
  const navigate = useNavigate();
  const globalStates = useContext(DataContext);
  const handleSubmitBlog = async (e) => {
    e.preventDefault();

    const blogData = new FormData();
    blogData.append("title", newBlog.title);
    blogData.append("desc", newBlog.description);
    blogData.append("blogImg", newBlog.blogImg);
    const token = "Bearer " + JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    };
    try {
      const responseData = await blogs_services.createBlog(blogData, config);
      globalStates.setBlogs(globalStates.blogs.concat(responseData));
      navigate("/");
      alert(`Blog created successfully!! (( Title - ${newBlog.title} ))`);
    } catch (err) {
      alert("Failed to create blog!!");
      console.log(err.message);
    }
  };
  return (
    <div className="write">
      <div className="writeImgContainer">
        {newBlog.blogImg && (
          <img
            src={URL.createObjectURL(newBlog.blogImg)}
            className="writeImg"
          />
        )}
      </div>
      <form className="writeForm" onSubmit={handleSubmitBlog}>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
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
          {/* <textarea
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
          ></textarea> */}
          <JoditEditor
            ref={editor}
            value={newBlog.description}
            onChange={(newContent) => {
              setNewBlog({
                ...newBlog,
                description: newContent,
              });
            }}
          />
        </div>
      </form>
    </div>
  );
}

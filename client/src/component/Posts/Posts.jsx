import Post from "../Post/Post";
import "./Posts.css";
import DataContext from "../../contexts/DataProvider";
import { useContext } from "react";
const Posts = () => {
  const globalStates = useContext(DataContext);
  return (
    <div className="posts">
      {globalStates.blogs &&
        globalStates.blogs.map((blog) => {
          return <Post key={blog.id} blog={blog} />;
        })}
    </div>
  );
};

export default Posts;

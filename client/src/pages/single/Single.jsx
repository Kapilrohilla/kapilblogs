import Sidebar from "../../component/Sidebar/Sidebar";
import Singlepost from "../../component/Singlepost/Singlepost";
import "./Single.css";
import { useLocation } from "react-router-dom";
import DataProvider from "../../contexts/DataProvider";
import { useContext } from "react";
export default function Single() {
  const globalStates = useContext(DataProvider);

  const location = useLocation();
  const id = location.pathname.replace("/post/", "");
  let post;
  if (globalStates.blogs) {
    post = globalStates.blogs.filter((blog) => {
      return blog.id === id;
    })[0];
  }
  return (
    <div className="single">
      {post && <Singlepost post={post} />}
      <Sidebar />
    </div>
  );
}

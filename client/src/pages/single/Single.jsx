import Sidebar from "../../component/Sidebar/Sidebar";
import Singlepost from "../../component/Singlepost/Singlepost";
import "./Single.css";
import { useLocation } from "react-router-dom";
// import DataProvider from "../../contexts/DataProvider";
import { useEffect, useState } from "react";
import blogs_services from "../../services/blogs_services";
export default function Single() {
  // const globalStates = useContext(DataProvider);
  const [blog, setBlog] = useState(null);
  const location = useLocation();
  const id = location.pathname.replace("/post/", "");
  // let post;
  // if (globalStates.blogs) {
  //   post = globalStates.blogs.filter((blog) => {
  //     return blog.id === id;
  //   })[0];
  // }
  useEffect(() => {
    async function fetchData() {
      setBlog(await blogs_services.getSpecificBlog(id));
    }
    fetchData();
  }, []);
  return (
    <div className="single">
      {blog && <Singlepost post={blog} />}
      <Sidebar />
    </div>
  );
}

import { useContext } from "react";
import Header from "../../component/Header/Header";
import Posts from "../../component/Posts/Posts";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Home.css";
import { DataProvider } from "../../contexts/DataProvider";
import blogs_services from "../../services/blogs_services";

const Home = () => {
  const globalStates = useContext(DataProvider);

  let responseData;
  blogs_services.getBlog().then((r) => {
    responseData = r;
  });
  globalStates.setBlogs(responseData);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

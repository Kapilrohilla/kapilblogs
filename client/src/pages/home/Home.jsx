import Header from "../../component/Header/Header";
import Posts from "../../component/Posts/Posts";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
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

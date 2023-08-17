import Sidebar from "../../component/Sidebar/Sidebar";
import Singlepost from "../../component/Singlepost/Singlepost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
}

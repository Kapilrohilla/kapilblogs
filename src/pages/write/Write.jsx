import "./Write.css";
import AddIcon from "@mui/icons-material/Add";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="" alt="" />
      <form className="writeForm">
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
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
          <button className="writeSubmit">Publish</button>
        </div>
      </form>
    </div>
  );
}

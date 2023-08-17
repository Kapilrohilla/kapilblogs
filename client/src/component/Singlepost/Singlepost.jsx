import "./Singlepost.css";

// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Singlepost() {
  const singlePostEditIconCss = {
    marginLeft: "10px",
    cursor: "pointer",
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="" alt="" className="singlePostImg" />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet.{" "}
        <div className="singlePostEdit">
          <EditIcon sx={{ ...singlePostEditIconCss, color: "teal" }} />
          <DeleteIcon sx={{ ...singlePostEditIconCss, color: "tomato" }} />
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>Kapil</b>
        </span>
        <span className="singlePostDate">1 hr ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        perspiciatis numquam a, nostrum eos aspernatur! Magni modi, asperiores
        veniam quas velit sed molestiae id quia hic blanditiis odit expedita
        tenetur vitae mollitia eveniet eos, soluta, veritatis beatae nihil
        officia accusantium omnis! Alias voluptatem hic quibusdam odio provident
        perspiciatis culpa dolor? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorem perspiciatis numquam a, nostrum eos
        aspernatur! Magni modi, asperiores veniam quas velit sed molestiae id
        quia hic blanditiis odit expedita tenetur vitae mollitia eveniet eos,
        soluta, veritatis beatae nihil officia accusantium omnis! Alias
        voluptatem hic quibusdam odio provident perspiciatis culpa dolor? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis
        numquam a, nostrum eos aspernatur! Magni modi, asperiores veniam quas
        velit sed molestiae id quia hic blanditiis odit expedita tenetur vitae
        mollitia eveniet eos, soluta, veritatis beatae nihil officia accusantium
        omnis! Alias voluptatem hic quibusdam odio provident perspiciatis culpa
        dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        perspiciatis numquam a, nostrum eos aspernatur! Magni modi, asperiores
        veniam quas velit sed molestiae id quia hic blanditiis odit expedita
        tenetur vitae mollitia eveniet eos, soluta, veritatis beatae nihil
        officia accusantium omnis! Alias voluptatem hic quibusdam odio provident
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        perspiciatis numquam a, nostrum eos aspernatur! Magni modi, asperiores
        veniam quas velit sed molestiae id quia hic blanditiis odit expedita
        tenetur vitae mollitia eveniet eos, soluta, veritatis beatae nihil
        officia accusantium omnis! Alias voluptatem hic quibusdam odio provident
        perspiciatis culpa dolor? perspiciatis culpa dolor?
      </p>
    </div>
  );
}

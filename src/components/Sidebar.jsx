import { Avatar } from "@mui/material";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar_top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Yamin</h2>
        <h4>developer.yamin@gmail.com</h4>
      </div>
    </section>
  );
}

export default Sidebar;

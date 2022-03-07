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
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>

        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
      </div>
    </section>
  );
}

export default Sidebar;

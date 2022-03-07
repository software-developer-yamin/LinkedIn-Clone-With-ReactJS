import { Avatar } from "@mui/material";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://media.istockphoto.com/photos/abstract-wave-picture-id1287065728?b=1&k=20&m=1287065728&s=170667a&w=0&h=d-AiO7_2elysdrypFIup7ZsvHwQ7dohK8kwv1o8swIs="
          alt=""
        />
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

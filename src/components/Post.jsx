import { Avatar } from "@mui/material";
import "../styles/Post.css";

function Post({ message, name, description, photoUrl }) {
  return (
    <section className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>Yamin</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post_body">
        <p>Messaging goes here</p>
      </div>
    </section>
  );
}

export default Post;

import { ThumbUpAltOutlined, ThumbUpOffAltOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "../styles/Post.css";
import InputOption from "./InputOption";

function Post({ message, name, description, photoUrl }) {
  return (
    <section className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_bottoms">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" />
      </div>
    </section>
  );
}

export default Post;

import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
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
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comments" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </section>
  );
}

export default Post;

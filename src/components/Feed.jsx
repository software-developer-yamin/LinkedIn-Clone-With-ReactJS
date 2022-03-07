import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import { useState } from "react";
import "../styles/Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="feed">
      <header className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input type="text" />
            <button hidden type="submit" onClick={sendPost} >
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption title="Photo" Icon={Image} color="#70B5F9" />
          <InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDay}
            color="#7FC15E"
          />
        </div>
      </header>
      <main>
        {posts.map((post) => (
          <Post />
        ))}
        <Post
          name="name"
          description="description"
          message="messaging goes here"
        />
      </main>
    </section>
  );
}

export default Feed;

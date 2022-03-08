import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";
import { db } from "../firebase";
import "../styles/Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [db]);

  const sendPost = async (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <section className="feed">
      <header className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button hidden type="submit" onClick={sendPost}>
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
        <FlipMove>
          {posts.map(
            ({ id, data: { message, name, description, photoUrl } }) => (
              <Post
                name={name}
                message={message}
                description={description}
                photoUrl={photoUrl}
                key={id}
              />
            )
          )}
        </FlipMove>
      </main>
    </section>
  );
}

export default Feed;

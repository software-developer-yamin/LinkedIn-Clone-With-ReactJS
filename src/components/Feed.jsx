import { CalendarViewDay, Create, EventNote, Image, Subscript, Subscriptions } from "@mui/icons-material";
import "../styles/Feed.css";
import InputOption from "./InputOption";

function Feed() {
  return (
    <section className="feed">
      <header className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input type="text" />
            <button hidden type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption title="Photo" Icon={Image} color="#70B5F9" />
          <InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
          <InputOption title="Write article" Icon={CalendarViewDay} color="#7FC15E" />
        </div>
      </header>
    </section>
  );
}

export default Feed;

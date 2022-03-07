import CreateIcon from "@mui/icons-material/Create";
import "../styles/Feed.css";
import InputOption from "./InputOption";

function Feed() {
  return (
    <section className="feed">
      <header className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button hidden type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption />
        </div>
      </header>
    </section>
  );
}

export default Feed;

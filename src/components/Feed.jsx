import { Create, Image } from "@mui/icons-material";
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
        </div>
      </header>
    </section>
  );
}

export default Feed;

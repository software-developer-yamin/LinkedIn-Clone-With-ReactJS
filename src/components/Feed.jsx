import CreateIcon from "@mui/icons-material/Create";
import "../styles/Feed.css";

function Feed() {
  return (
    <section className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Feed;

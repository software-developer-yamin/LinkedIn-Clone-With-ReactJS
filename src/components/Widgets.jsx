import { FiberManualRecord, Info } from "@mui/icons-material";
import "../styles/Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <section className="widgets">
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newsArticle(
        "All Bangladeshi English Newspapers",
        "Top views - 100000 readers"
      )}
      {newsArticle(
        "All Bangladeshi English Newspapers",
        "Top views - 100000 readers"
      )}
      {newsArticle(
        "All Bangladeshi English Newspapers",
        "Top views - 100000 readers"
      )}
    </section>
  );
}

export default Widgets;

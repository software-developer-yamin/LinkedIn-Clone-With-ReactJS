import SearchIcon from "@mui/icons-material/Search";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <section className="header_right">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1646636901~hmac=1dddef82db49e52b32f355d2db03f2f9"
          alt=""
          className=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </section>
      <section className="header_left"></section>
    </header>
  );
}

export default Header;

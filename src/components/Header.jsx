import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <header className="header">
      <section className="header_right">
        <img src="" alt="" className="" />
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

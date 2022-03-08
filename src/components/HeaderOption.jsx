import { Avatar } from "@mui/material";
import "../styles/HeaderOption.css";

function HeaderOption({ title, Icon, avatar, onClick}) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && onClick && (
        <Avatar src={avatar} className="headerOption_icon" onClick={onClick} />
      )}
      {title && <h3 className="headerOption_title">{title}</h3>}
    </div>
  );
}

export default HeaderOption;

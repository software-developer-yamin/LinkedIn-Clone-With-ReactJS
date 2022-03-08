import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";
import "../styles/HeaderOption.css";

function HeaderOption({ title, Icon, avatar, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && onClick && (
        <Avatar className="headerOption_icon" onClick={onClick}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      {title && <h3 className="headerOption_title">{title}</h3>}
    </div>
  );
}

export default HeaderOption;

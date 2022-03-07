import "../styles/InputOption.css";

function InputOption({ title, Icon, color }) {
  return (
    <div className="InputOption">
      {Icon && color && <Icon style={{ color: color }} />}
      {title && <h4>{title}</h4>}
    </div>
  );
}

export default InputOption;

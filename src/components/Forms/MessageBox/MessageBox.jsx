import "./MessageBox.css";

export function MessageBox(props) {
  const { noDisplay, style, onClick } = props;
  return (
    <div className="message-box" style={!noDisplay ? style : {}}>
      <p>Message sent successfully!</p>
      <button onClick={onClick}>x</button>
    </div>
  );
}

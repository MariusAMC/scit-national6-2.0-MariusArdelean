import "./Button.css";

export function Button(props) {
  return (
    <div className="button">
      <button onClick={props.onClick}>Send Message</button>
    </div>
  );
}

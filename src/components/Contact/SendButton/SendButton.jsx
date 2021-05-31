import "./SendButton.scss";
import SendIcon from "@material-ui/icons/Send";

export function SendButton(props) {
  return (
    <div className="btn">
      <button type="submit" className="button" onClick={props.onClick}>
        <span>Send Message</span>
        <SendIcon />
      </button>
    </div>
  );
}

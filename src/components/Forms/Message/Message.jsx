import "./Message.css";

export function Message(props) {
  const { label, onChange, isValid, style } = props;

  return (
    <div className="message">
      <p>{label}</p>
      <textarea onChange={onChange} style={!isValid ? style : {}}></textarea>
    </div>
  );
}

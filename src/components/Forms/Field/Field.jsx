import "./Field.css";

export function Field(props) {
  const { label, onChange, isValid, style } = props;

  return (
    <div className="field">
      <p>{label}</p>
      <input type="text" onChange={onChange} style={!isValid ? style : {}} />
    </div>
  );
}

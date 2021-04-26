import "./ToDoItem.css";

export function ToDoItem(props) {
  console.log(props);

  return (
    <div className="to-do-item">
      <input type="checkbox" defaultChecked={props.checkValue} />
      <p>{props.label}</p>
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/748/748023.svg?token=exp=1619450332~hmac=61409cc4673b5a0bd6635c6bf0f81c9b"
        alt="trash"
      />
    </div>
  );
}

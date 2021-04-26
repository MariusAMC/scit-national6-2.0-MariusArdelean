import { Component } from "react";

export class ToDoItemWithState extends Component {
  state = {
    nrOfClicks: 0,
    nrOfClicksOnRemove: 0,
  };

  handleIncreaseClicks = () => {
    console.log("clic on items");
    this.setState({ nrOfClicks: this.state.nrOfClicks + 1 });
  };

  render() {
    return (
      <div className="to-do-item" onClick={this.handleIncreaseClicks}>
        <input type="checkbox" defaultChecked={this.props.checkValue} />
        <p>{this.props.label}</p>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/748/748023.svg?token=exp=1619450332~hmac=61409cc4673b5a0bd6635c6bf0f81c9b"
          alt="trash"
        />
        <p>{this.state.nrOfClicks}</p>
      </div>
    );
  }
}

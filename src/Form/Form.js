import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
    };
  }

  onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState({
      name: "",
      date: "",
      time: "",
      number: "",
    });
  };

  render() {
    return (
      <form className="Form">
        <input
          type="text"
          placeholder="Name"
          onChange={this.onChange}
          name="name"
          value={this.state.name}
        ></input>
        <input
          type="text"
          placeholder="Date (mm/dd)"
          onChange={this.onChange}
          name="date"
          value={this.state.date}
        ></input>
        <input
          type="text"
          placeholder="Time"
          onChange={this.onChange}
          name="time"
          value={this.state.time}
        ></input>
        <input
          type="text"
          placeholder="No. of guests"
          onChange={this.onChange}
          name="number"
          value={this.state.number}
        ></input>
        <button onClick={this.submit}>Make Reservation</button>
      </form>
    );
  }
}

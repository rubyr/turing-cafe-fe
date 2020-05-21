import React, { Component } from "react";
import "./App.css";
import Reservation from "../Reservation/Reservation";
import Form from "../Form/Form";
import {
  getReservations,
  submitReservation,
  deleteReservation,
} from "../apiCalls";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservations: [],
    };
  }

  async componentDidMount() {
    const reservations = await getReservations();

    this.setState({ reservations });
  }

  submit = async (data) => {
    try {
      const reservation = await submitReservation(data).then((r) =>
        r.ok ? r.json() : r.status
      );
      if (typeof reservation === "object") {
        this.setState({
          reservations: [reservation, ...this.state.reservations],
        });
      } else {
        this.showError(reservation);
      }
    } catch (e) {
      this.showError();
    }
  };

  remove = (id) => {
    const reservations = this.state.reservations.filter((r) => r.id !== id);
    deleteReservation(id);
    this.setState({ reservations });
  };

  showError = (code) => {
    this.setState({
      error: (
        <span className="error">
          We're sorry, your request could not be processed. (Error code: {code})
        </span>
      ),
    });
  };

  render() {
    const reservations = this.state.reservations.map((res) => (
      <Reservation key={res.id} {...res} remove={this.remove} />
    ));
    return (
      <div className="App">
        {this.state.error}
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form submit={this.submit} />
        </div>
        <div className="resy-container">{reservations}</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Reservation from "../Reservation/Reservation";
import Form from "../Form/Form";
import { getReservations } from "../apiCalls";

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

  submit = (data) => {
    this.setState({
      reservations: [data, ...this.state.reservations],
    });
  };

  remove = (id) => {
    const reservations = this.state.reservations.filter((r) => r.id !== id);
    this.setState({ reservations });
  };

  render() {
    const reservations = this.state.reservations.map((res) => (
      <Reservation key={res.id} {...res} remove={this.remove} />
    ));
    return (
      <div className="App">
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

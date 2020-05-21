import React from "react";
import "./Reservation.css";

const Reservation = ({ id, date, name, time, number, remove }) => {
  return (
    <div className="Reservation">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>No. of guests: {number}</p>
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};

export default Reservation;

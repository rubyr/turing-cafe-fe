import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { reservations } from "../mockTestData";
import { getReservations } from "../apiCalls";
jest.mock("../apiCalls.js");
getReservations.mockResolvedValue(reservations);

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("displays the form", async () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Time")).toBeInTheDocument();
  });
  it("Displays a reservation", async () => {
    const { getByText } = render(<App />);
    const card1 = await waitFor(() => getByText("Christie"));
    const card2 = await waitFor(() => getByText("Leta"));
    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
  });
  it("Can make a new reservation", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const name = getByPlaceholderText("Name");
    const submit = getByText(/Make/);
    fireEvent.change(name, { target: { value: "sbeve" } });
    fireEvent.click(submit);
    expect(getByText("sbeve")).toBeInTheDocument();
  });
});

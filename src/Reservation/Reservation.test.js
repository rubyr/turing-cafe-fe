import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Reservation from "./Reservation";

describe("Reservation", () => {
  const data = {
    id: 1,
    name: "Jeff",
    date: "11/11",
    time: "11:00",
    number: 3,
  };
  it("should render to the page", () => {
    const { getByText } = render(<Reservation {...data} />);
    expect(getByText("Jeff")).toBeInTheDocument();
    expect(getByText("11/11")).toBeInTheDocument();
    expect(getByText("11:00")).toBeInTheDocument();
    expect(getByText("No. of guests: 3")).toBeInTheDocument();
  });
  it("should call the delete function", () => {
    const mockRemove = jest.fn();
    const { getByText } = render(<Reservation {...data} remove={mockRemove} />);
    fireEvent.click(getByText("Delete"));
    expect(mockRemove).toBeCalledWith(1);
  });
});

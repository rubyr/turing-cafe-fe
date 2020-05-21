import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./Form";

describe("Form", () => {
  it("should render to the page", () => {
    const { getByPlaceholderText, getByText } = render(<Form />);
    expect(getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/date/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/time/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/No\./)).toBeInTheDocument();
    expect(getByText(/make reservation/i)).toBeInTheDocument();
  });
  it("should take in data correctly", () => {
    const { getByPlaceholderText } = render(<Form />);
    const name = getByPlaceholderText(/name/i);
    fireEvent.change(name, { target: { value: "sbeve" } });
    expect(name.value).toBe("sbeve");
  });
  it("should submit the data", () => {
    const mockSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Form submit={mockSubmit} />
    );
    const name = getByPlaceholderText(/name/i);
    fireEvent.change(name, { target: { value: "sbeve" } });
    fireEvent.click(getByText("Make Reservation"));
    expect(mockSubmit).toHaveBeenCalledWith({
      name: "sbeve",
      date: "",
      number: "",
      time: "",
    });
  });
});

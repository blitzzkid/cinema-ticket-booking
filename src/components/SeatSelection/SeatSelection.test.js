import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SeatSelection from "./SeatSelection";

describe("The seat selection grid", () => {
  it("should show the screen", () => {
    const allSeats = [
      {
        _id: "5dfb8aae5104705e12c09854",
        seatNumber: "A2",
        status: "sold",
        capacity: 1,
        __v: 0
      }
    ];
    const { getByText } = render(<SeatSelection allSeats={allSeats} />);
    expect(getByText("Screen")).toBeInTheDocument();
  });

  it("should attempt to select a sold seat", () => {
    const allSeats = [
      {
        _id: "5dfb8aae5104705e12c09854",
        seatNumber: "A2",
        status: "sold",
        capacity: 1,
        __v: 0
      }
    ];
    const { getByText } = render(<SeatSelection allSeats={allSeats} />);
    const seatA2 = getByText("A2");
    fireEvent.click(seatA2);
    expect(getByText("This seat has already been sold")).toBeInTheDocument();
  });

  it("should attempt to select a reserved seat", () => {
    const seatsReserved = [
      {
        _id: "5df9c4815489a584649552a3",
        seatNumber: "A3",
        status: "reserved",
        capacity: 1,
        __v: 0
      }
    ];
    const { getByText } = render(
      <SeatSelection allSeats={seatsReserved} selectedSeats={[]} />
    );
    const seatA3 = getByText("A3");
    fireEvent.click(seatA3);
    expect(getByText("This seat has been reserved")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import SeatSelection from "./SeatSelection";

describe("The seat selection grid", () => {
  it("should show the seats", () => {
    const allSeats = [
      {
        _id: "5df9c4815489a584649552a3",
        seatNumber: "A2",
        status: "sold",
        capacity: 1,
        __v: 0
      }
    ];
    const { getByText } = render(<SeatSelection allSeats={allSeats} />);
    expect(getByText("Screen")).toBeInTheDocument();
  });
});

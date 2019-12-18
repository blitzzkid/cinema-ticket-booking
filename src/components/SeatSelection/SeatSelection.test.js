import React from "react";
import { render } from "@testing-library/react";
import SeatSelection from "./SeatSelection";

describe("The seat selection grid", () => {
  it("should show the seats", () => {
    const { getByText } = render(<SeatSelection />);
    expect(getByText("Screen")).toBeInTheDocument();
  });
});

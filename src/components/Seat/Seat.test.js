import React from "react";
import { render } from "@testing-library/react";
import Seat from "./Seat";

describe("A single seat", () => {
  it("Shows a single cinema seat", () => {
    const { getByAltText } = render(<Seat />);
    expect(getByAltText("cinema-seat")).toBeInTheDocument();
  });
});

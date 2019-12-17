import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("Renders the Ticket Booking App", () => {
  it("Renders the App without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

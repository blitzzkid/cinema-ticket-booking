import React from "react";
import "./App.css";
import TicketBookingForm from "../TicketBookingForm/TicketBookingForm";
import SeatSelection from "../SeatSelection/SeatSelection";

function App() {
  return (
    <div className="App">
      <SeatSelection />
      <TicketBookingForm />
    </div>
  );
}

export default App;

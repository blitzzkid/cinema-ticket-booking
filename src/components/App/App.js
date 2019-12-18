import React from "react";
import "./App.css";
import TicketBookingForm from "../TicketBookingForm/TicketBookingForm";
import SeatSelection from "../SeatSelection/SeatSelection";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSeats: []
    };
  }

  handleSeatSelected = seatNumber => {
    const seatsSelected = this.state.selectedSeats;
    if (!seatsSelected.includes(seatNumber)) {
      seatsSelected.push(seatNumber);
    }
    this.setState({
      selectedSeats: seatsSelected
    });
  };

  render() {
    return (
      <div className="App">
        <SeatSelection
          handleSeatSelected={this.handleSeatSelected}
          selectedSeats={this.state.selectedSeats}
        />
        <TicketBookingForm />
      </div>
    );
  }
}

export default App;

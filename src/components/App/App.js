import React from "react";
import "./App.css";
import TicketBookingForm from "../TicketBookingForm/TicketBookingForm";
import SeatSelection from "../SeatSelection/SeatSelection";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSeats: [],
      selectedSeatsId: []
    };
  }

  handleSeatSelected = (seatNumber, seatId) => {
    const seatsSelected = this.state.selectedSeats;
    const seatsSelectedId = this.state.selectedSeatsId;
    if (!seatsSelected.includes(seatNumber)) {
      seatsSelected.push(seatNumber);
      seatsSelectedId.push(seatId);
    }
    this.setState({
      selectedSeats: seatsSelected,
      selectedSeatsId: seatsSelectedId
    });
  };

  render() {
    return (
      <div className="App">
        <SeatSelection
          handleSeatSelected={this.handleSeatSelected}
          selectedSeats={this.state.selectedSeats}
        />
        <TicketBookingForm
          selectedSeats={this.state.selectedSeats}
          selectedSeatsId={this.state.selectedSeatsId}
        />
      </div>
    );
  }
}

export default App;

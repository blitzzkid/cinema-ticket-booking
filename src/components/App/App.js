import React from "react";
import "./App.css";
import TicketBookingForm from "../TicketBookingForm/TicketBookingForm";
import SeatSelection from "../SeatSelection/SeatSelection";
import { fetchAllSeats } from "../../api/api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seats: [],
      selectedSeats: [],
      selectedSeatsId: [],
      hasReservedSeats: false,
      message: ""
    };
  }

  componentDidMount = () => {
    this.updateSeats();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.hasReservedSeats !== prevState.hasReservedSeats) {
      this.updateSeats();
    }
  };

  updateSeats = async () => {
    const allSeats = await fetchAllSeats();
    allSeats.sort((a, b) => a.seatNumber.localeCompare(b.seatNumber));
    this.setState({
      seats: allSeats
    });
  };

  handleSeatSelected = (seatNumber, seatId) => {
    const seatsSelected = this.state.selectedSeats;
    const seatsSelectedId = this.state.selectedSeatsId;
    if (!seatsSelected.includes(seatNumber)) {
      seatsSelected.push(seatNumber);
      seatsSelectedId.push(seatId);
    }
    this.setState({
      selectedSeats: seatsSelected,
      selectedSeatsId: seatsSelectedId,
      message: ""
    });
    this.updateSeats();
  };

  handleSeatUnselected = (seatNumber, seatId) => {
    const seatsSelected = this.state.selectedSeats;
    const seatsSelectedId = this.state.selectedSeatsId;
    if (seatsSelected.includes(seatNumber)) {
      const indexOfSeat = seatsSelected.findIndex(seat => seat === seatNumber);
      seatsSelected.splice(indexOfSeat, 1);
      const indexOfSeatId = seatsSelectedId.findIndex(seat => seat === seatId);
      seatsSelectedId.splice(indexOfSeatId, 1);
    }
    this.setState({
      selectedSeats: seatsSelected,
      selectedSeatsId: seatsSelectedId,
      message: ""
    });
    this.updateSeats();
  };

  handleSeatReserved = () => {
    if (this.state.selectedSeats.length !== 0) {
      this.setState({
        hasReservedSeats: true
      });
    } else {
      this.setState({
        message: "Please select seats to reserve for purchase"
      });
    }
  };

  handleReselectSeats = async () => {
    await this.updateSeats();
    this.setState({
      selectedSeats: [],
      selectedSeatsId: [],
      hasReservedSeats: false,
      message: ""
    });
  };

  render() {
    if (!this.state.hasReservedSeats) {
      return (
        <div className="App">
          <SeatSelection
            allSeats={this.state.seats}
            selectedSeats={this.state.selectedSeats}
            handleSeatSelected={this.handleSeatSelected}
            handleSeatUnselected={this.handleSeatUnselected}
            handleSeatReserved={this.handleSeatReserved}
          />
          {this.state.message}
        </div>
      );
    } else {
      return (
        <div>
          <TicketBookingForm
            selectedSeatsId={this.state.selectedSeatsId}
            handleReselectSeats={this.handleReselectSeats}
          />
        </div>
      );
    }
  }
}

export default App;

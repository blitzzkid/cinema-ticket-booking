import React from "react";
import { fetchAllSeats, reserveSeat, releaseSeat } from "../../api/api";
import Seat from "../Seat/Seat";
import "./SeatSelection.css";

class SeatSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: [],
      message: ""
    };
  }
  componentDidMount = async () => {
    try {
      const allSeats = await fetchAllSeats();
      allSeats.sort((a, b) => a.seatNumber.localeCompare(b.seatNumber));
      this.setState({
        seats: allSeats
      });
    } catch (err) {
      return err.message;
    }
  };

  handleSeatStatusChange = async (seatId, seatStatus, seatNumber) => {
    if (seatStatus === "sold") {
      this.setState({
        message: "This seat has already been sold"
      });
    } else if (seatStatus === "reserved") {
      if (!this.props.selectedSeats.includes(seatNumber)) {
        this.setState({
          message: "This seat has been reserved"
        });
      } else if (this.props.selectedSeats.includes(seatNumber)) {
        await releaseSeat(seatId);
        const updatedSeats = await fetchAllSeats();
        updatedSeats.sort((a, b) => a.seatNumber.localeCompare(b.seatNumber));
        this.setState({
          message: "",
          seats: updatedSeats
        });
      }
    } else if (seatStatus === "available") {
      this.props.handleSeatSelected(seatNumber);
      await reserveSeat(seatId);
      const updatedSeats = await fetchAllSeats();
      updatedSeats.sort((a, b) => a.seatNumber.localeCompare(b.seatNumber));
      this.setState({
        message:
          "You have reserved the selected seat(s), please make a booking",
        seats: updatedSeats
      });
    }
  };

  render() {
    return (
      <div>
        <div>Screen</div>
        <div className="seatSelection__list">
          {this.state.seats.map(seat => {
            return (
              <Seat
                seatId={seat._id}
                seatNumber={seat.seatNumber}
                seatStatus={seat.status}
                key={seat._id}
                handleSeatStatusChange={this.handleSeatStatusChange}
                selectedSeats={this.props.selectedSeats}
              />
            );
          })}
        </div>
        {this.state.message}
      </div>
    );
  }
}

export default SeatSelection;

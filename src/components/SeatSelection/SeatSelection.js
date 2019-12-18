import React from "react";
import { fetchAllSeats } from "../../api/api";
import Seat from "../Seat/Seat";
import "./SeatSelection.css";

class SeatSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      seats: []
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

  render() {
    return (
      <div>
        <div>Screen</div>
        <div className="seatSelection__list">
          {this.state.seats.map(seat => {
            return (
              <Seat
                seatNumber={seat.seatNumber}
                seatStatus={seat.status}
                key={seat._id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SeatSelection;

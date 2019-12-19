import React from "react";
import { reserveSeat, releaseSeat } from "../../api/api";
import Seat from "../Seat/Seat";
import "./SeatSelection.css";
import PropTypes from "prop-types";

class SeatSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

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
        this.props.handleSeatUnselected(seatNumber, seatId);
        this.setState({
          message: ""
        });
      }
    } else if (seatStatus === "available") {
      await reserveSeat(seatId);
      this.props.handleSeatSelected(seatNumber, seatId);
      this.setState({
        message: "You have reserved the selected seat(s), please make a booking"
      });
    }
  };

  onSeatsReserved = () => {
    this.props.handleSeatReserved();
  };

  render() {
    return (
      <div className="seatSelection__container">
        <h1 className="seatSelection__heading">Screen</h1>
        <div className="seatSelection__list">
          {this.props.allSeats.map(seat => {
            return (
              <Seat
                key={seat._id}
                seatId={seat._id}
                seatNumber={seat.seatNumber}
                seatStatus={seat.status}
                handleSeatStatusChange={this.handleSeatStatusChange}
                selectedSeats={this.props.selectedSeats}
              />
            );
          })}
        </div>
        <div className="seatSelection__message">{this.state.message}</div>
        <button
          className="seatSelection__reserveButton"
          type="button"
          onClick={this.onSeatsReserved}
        >
          Book seats
        </button>
      </div>
    );
  }
}

SeatSelection.propTypes = {
  allSeats: PropTypes.array,
  selectedSeats: PropTypes.array,
  handleSeatSelected: PropTypes.func,
  handleSeatUnselected: PropTypes.func,
  handleSeatReserved: PropTypes.func
};

export default SeatSelection;

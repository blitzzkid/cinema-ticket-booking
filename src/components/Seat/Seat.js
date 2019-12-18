import React from "react";
import seatAvailable from "../../assets/seatAvailable.png";
import seatReserved from "../../assets/seatReserved.png";
import seatSold from "../../assets/SeatSold.png";
import seatReservedSelected from "../../assets/seatReservedSelected.png";
import "./Seat.css";
import PropTypes from "prop-types";

const Seat = ({
  seatId,
  seatNumber,
  seatStatus,
  handleSeatStatusChange,
  selectedSeats
}) => {
  return (
    <div
      onClick={() => handleSeatStatusChange(seatId, seatStatus, seatNumber)}
      className={
        seatStatus === "reserved" && !selectedSeats.includes(seatNumber)
          ? "seat__reserved"
          : seatStatus === "reserved" && selectedSeats.includes(seatNumber)
          ? "seat__reserved"
          : seatStatus === "sold"
          ? "seat__sold"
          : "seat__available"
      }
    >
      <img
        src={
          seatStatus === "reserved" && !selectedSeats.includes(seatNumber)
            ? seatReserved
            : seatStatus === "reserved" && selectedSeats.includes(seatNumber)
            ? seatReservedSelected
            : seatStatus === "sold"
            ? seatSold
            : seatAvailable
        }
        alt="cinema-seat"
      ></img>
      <p>{seatNumber}</p>
    </div>
  );
};

Seat.propTypes = {
  seatId: PropTypes.string,
  seatNumber: PropTypes.string,
  seatStatus: PropTypes.string,
  handleSeatStatusChange: PropTypes.func,
  selectedSeats: PropTypes.array
};

export default Seat;

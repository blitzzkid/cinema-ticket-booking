import React from "react";
import seatAvailable from "../../assets/seatAvailable.png";
import seatReserved from "../../assets/seatReserved.png";
import seatSold from "../../assets/SeatSold.png";
import seatReservedSelected from "../../assets/seatReservedSelected.png";
import "./Seat.css";

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

export default Seat;

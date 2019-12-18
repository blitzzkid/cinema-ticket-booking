import React from "react";
import seatAvailable from "../../assets/seatAvailable.png";
import seatReserved from "../../assets/seatReserved.png";
import seatSold from "../../assets/SeatSold.png";
import "./Seat.css";

const Seat = ({ seatNumber, seatStatus }) => {
  return (
    <div
      className={
        seatStatus === "reserved"
          ? "seat__reserved"
          : seatStatus === "sold"
          ? "seat__sold"
          : "seat__available"
      }
    >
      <img
        src={
          seatStatus === "reserved"
            ? seatReserved
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

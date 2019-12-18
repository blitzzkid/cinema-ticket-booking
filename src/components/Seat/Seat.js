import React from "react";

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
      <img src="../../assets/seat.png" alt="cinema-seat" />
      <p>{seatNumber}</p>
    </div>
  );
};

export default Seat;

import React from "react";

function Seat({ seat, onSelect }) {
  const handleClick = () => {
    if (!seat.booked) {
      onSelect(seat.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "40px",
        height: "40px",
        margin: "5px",
        textAlign: "center",
        lineHeight: "40px",
        cursor: seat.booked ? "not-allowed" : "pointer",
        backgroundColor: seat.booked
          ? "gray"
          : seat.selected
          ? "green"
          : "lightblue",
      }}
    >
      {seat.id}
    </div>
  );
}

export default Seat;
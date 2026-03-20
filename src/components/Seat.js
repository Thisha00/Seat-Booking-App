import React from "react";

function Seat({ seat, onSelect }) {
  const handleClick = () => {
    if (!seat.booked) {
      onSelect(seat.id);
    }
  };

  let seatClass = "seat";

  if (seat.booked) seatClass += " booked";
  else if (seat.selected) seatClass += " selected";

  return (
    <div
      className={seatClass}
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
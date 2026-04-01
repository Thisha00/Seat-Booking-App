import React from "react";
import "./SeatGrid.css";

function Seat({ seat, onSelect }) {
  const handleClick = () => {
    if (!seat.booked) {
      onSelect(seat.id);
    }
  };

  let seatClass = "seat";

  if (seat.type === "VIP") seatClass += " vip";
  else seatClass += " regular";

  if (seat.booked) seatClass += " booked";
  else if (seat.selected) seatClass += " selected";

  return (
    <div className={seatClass} onClick={handleClick}>
      {seat.id}
    </div>
  );
}

export default Seat;
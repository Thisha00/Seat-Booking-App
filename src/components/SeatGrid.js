import React from "react";
import Seat from "./Seat";

function SeatGrid({ seats, onSelect }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "250px" }}>
      {seats.map((seat) => (
        <Seat key={seat.id} seat={seat} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default SeatGrid;
import React from "react";
import Seat from "./Seat";
import "./SeatGrid.css";

function SeatGrid({ seats, onSelect }) {
  // group seats into rows (5 seats per row)
  const rows = [];
  const seatsPerRow = 5;

  for (let i = 0; i < seats.length; i += seatsPerRow) {
    rows.push(seats.slice(i, i + seatsPerRow));
  }

  return (
    <div className="cinema-container">
      <div className="screen">SCREEN</div>

      <div className="seats-container">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            <span className="row-label">
              {String.fromCharCode(65 + rowIndex)}
            </span>

            {row.map((seat) => (
              <Seat key={seat.id} seat={seat} onSelect={onSelect} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatGrid;
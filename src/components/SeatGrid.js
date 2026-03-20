import React from "react";
import Seat from "./Seat";
import "./SeatGrid.css";

function SeatGrid({ seats, onSelect }) {
  const rows = [];

  const seatsPerRow = 15;

  for (let i = 0; i < seats.length; i += seatsPerRow) {
    rows.push(seats.slice(i, i + seatsPerRow));
  }

  return (
    <div className="cinema-container">
      <div className="screen">SCREEN</div>

      <div className="seats-container">
        {rows.map((row, rowIndex) => {
          const left = row.slice(0, 5);
          const middle = row.slice(5, 10);
          const right = row.slice(10, 15);

          return (
            <div key={rowIndex} className="seat-row">
              <span className="row-label">
                {String.fromCharCode(65 + rowIndex)}
              </span>

              <div className="seat-section">
                {left.map((seat) => (
                  <Seat key={seat.id} seat={seat} onSelect={onSelect} />
                ))}
              </div>

              <div className="gap"></div>

              <div className="seat-section">
                {middle.map((seat) => (
                  <Seat key={seat.id} seat={seat} onSelect={onSelect} />
                ))}
              </div>

              <div className="gap"></div>

              <div className="seat-section">
                {right.map((seat) => (
                  <Seat key={seat.id} seat={seat} onSelect={onSelect} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeatGrid;
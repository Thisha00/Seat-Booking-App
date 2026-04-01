import React from "react";
import "./SeatGrid.css";

function BookingSummary({ seats }) {
  const selectedSeats = seats.filter((seat) => seat.selected);

  const total = selectedSeats.reduce(
    (sum, seat) => sum + seat.price,
    0
  );

  return (
    <div className="summary">
      <h3>Selected Seats:</h3>
      <p>
        {selectedSeats.length > 0
          ? selectedSeats.map((seat) => seat.id).join(", ")
          : "None"}
      </p>

      <h3>Total Price: Rs. {total.toFixed(2)}</h3>

      {/* 🎨 Legend */}
      <div className="legend">
        <div className="legend-item">
          <span className="box vip-box"></span>
          <span>VIP (Rs.2200)</span>
        </div>

        <div className="legend-item">
          <span className="box regular-box"></span>
          <span>Regular (Rs.1800)</span>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;
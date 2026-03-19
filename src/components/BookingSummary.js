import React from "react";

function BookingSummary({ selectedSeats }) {
  const pricePerSeat = 100;
  const total = selectedSeats.length * pricePerSeat;

  return (
    <div>
      <h3>Selected Seats:</h3>
      <p>{selectedSeats.join(", ") || "None"}</p>
      <h3>Total Price: Rs. {total}</h3>
    </div>
  );
}

export default BookingSummary;
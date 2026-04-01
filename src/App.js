import React, { useState } from "react";
import SeatGrid from "./components/SeatGrid";
import BookingSummary from "./components/BookingSummary";
import "./App.css";

function App() {
  const generateSeats = () => {
  let seats = [];

  for (let row = 0; row < 6; row++) {
    for (let col = 1; col <= 15; col++) {
      let type = col > 5 && col <= 10 ? "VIP" : "Regular";

      seats.push({
        id: `${String.fromCharCode(65 + row)}${col}`,
        row: String.fromCharCode(65 + row),
        number: col,
        type: type,
        price: type === "VIP" ? 2200 : 1800,
        booked: Math.random() < 0.2,
        selected: false,
      });
    }
  }

  return seats;
};

  const [seats, setSeats] = useState(generateSeats());

  const handleSelect = (id) => {
    const updatedSeats = seats.map((seat) =>
      seat.id === id
        ? { ...seat, selected: !seat.selected }
        : seat
    );
    setSeats(updatedSeats);
  };

  const selectedSeats = seats
    .filter((seat) => seat.selected)
    .map((seat) => seat.id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Seat Booking System</h1>

      <SeatGrid seats={seats} onSelect={handleSelect} />

      <BookingSummary seats={seats} />
    </div>
  );
}

export default App;

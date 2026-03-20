import React, { useState } from "react";
import SeatGrid from "./components/SeatGrid";
import BookingSummary from "./components/BookingSummary";
import "./App.css";

function App() {
  const generateSeats = () => {
  let seats = [];
  let id = 1;

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 5; col++) {
      seats.push({
        id: id,
        row: String.fromCharCode(65 + row),
        number: col + 1,
        booked: Math.random() < 0.2,
        selected: false,
      });
      id++;
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

      <BookingSummary selectedSeats={selectedSeats} />
    </div>
  );
}

export default App;

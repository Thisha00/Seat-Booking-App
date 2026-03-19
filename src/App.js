import React, { useState } from "react";
import SeatGrid from "./components/SeatGrid";
import BookingSummary from "./components/BookingSummary";
import "./App.css";

function App() {
  const generateSeats = () => {
    let seats = [];
    for (let i = 1; i <= 20; i++) {
      seats.push({
        id: i,
        booked: Math.random() < 0.2, // some seats already booked
        selected: false,
      });
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

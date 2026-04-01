import React, { useState, useEffect } from "react";
import SeatGrid from "./components/SeatGrid";
import BookingSummary from "./components/BookingSummary";
import "./App.css";


function App() {
  const movies = [
  "The King",
  "Avatar",
  "Mission Impossible",
  "The Girlfriend",
];

const times = ["10:00 AM", "4:00 PM", "8:00 PM"];

const [selectedMovie, setSelectedMovie] = useState(movies[0]);
const [selectedTime, setSelectedTime] = useState(times[0]);

const [allSeats, setAllSeats] = useState({});

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

  //const [seats, setSeats] = useState(generateSeats());

  useEffect(() => {
  const key = `${selectedMovie}-${selectedTime}`;

  if (!allSeats[key]) {
    setAllSeats((prev) => ({
      ...prev,
      [key]: generateSeats(),
    }));
  }
}, [selectedMovie, selectedTime]);

const key = `${selectedMovie}-${selectedTime}`;
const seats = allSeats[key] || [];



  const handleSelect = (id) => {
  const updatedSeats = seats.map((seat) =>
    seat.id === id
      ? { ...seat, selected: !seat.selected }
      : seat
  );

  setAllSeats((prev) => ({
    ...prev,
    [key]: updatedSeats,
  }));
};

  const selectedSeats = seats
    .filter((seat) => seat.selected)
    .map((seat) => seat.id);

  return (
  <div className="layout">

    {/* LEFT PANEL - Movies & Times */}
    <div className="left-panel">
      <h2>Movies</h2>

      {movies.map((movie) => (
        <button
          key={movie}
          className={selectedMovie === movie ? "active" : ""}
          onClick={() => setSelectedMovie(movie)}
        >
          {movie}
        </button>
      ))}

      <h2>Show Times</h2>

      {times.map((time) => (
        <button
          key={time}
          className={selectedTime === time ? "active" : ""}
          onClick={() => setSelectedTime(time)}
        >
          {time}
        </button>
      ))}
    </div>

    {/* CENTER - Seats */}
    <div className="center-panel">
      <h1>Seat Booking</h1>

      <SeatGrid seats={seats} onSelect={handleSelect} />
    </div>

    {/* RIGHT PANEL - Total Price */}
    <div className="right-panel">
      <h2>Total Price</h2>

      <h1>
        Rs.{" "}
        {seats
          .filter((seat) => seat.selected)
          .reduce((sum, seat) => sum + seat.price, 0)
          .toFixed(2)}
      </h1>
    </div>

    {/* BOTTOM - Summary + Legend */}
    <div className="bottom-panel">
      <BookingSummary seats={seats} />
    </div>

  </div>
);
}

export default App;

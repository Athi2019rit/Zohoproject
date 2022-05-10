import React from "react";
import data from "./Navbar"
import "../../Styles/Booking.css";
const Booking = (data) => {
  return (
    <div>
      <nav className="booknav">
        <h1 className="bookhead">{data.cityname}</h1>
      </nav>
    </div>
  );
};

export default Booking;

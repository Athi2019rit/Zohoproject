import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="about-section footer">
      <h2 className="about-section__primary">
        <Link className="nav-link white" to="/">
          <img className="logo" src="caricon.png" alt="Car Rentals" />
        </Link>
      </h2>
      <p>
        Car Renty Cameroon <br />
        +111 222-333-444
      </p>
      <p>Car Renty {new Date().getFullYear()}. All rights reserved</p>
    </section>
  );
}

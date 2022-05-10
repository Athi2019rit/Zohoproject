import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/Navbar.css";
import { Button } from "react-bootstrap";
import Booking from "./Booking";

function NavbarConst() {
  const navigate = useNavigate();
  const [city, setcity] = useState({
    cityname: "",
    id: "",
  });
  const handleclick = (e) => {
    const { name, value } = e.target;
    setcity({
      ...city,
      [name]: value,
    });
  };
  <Booking key={city.id} data={city} />;
  const handlesubmit = () => {
    console.log(city.cityname);
  };
  return (
    <>
      <nav>
        <section className="header">
          <a href="" className="logo">
            CAR RENTY
          </a>
          <button id="logout" onClick={() => navigate("/")}>
            Logout
          </button>
        </section>
        <section className="nav-banner">
          <div className="navconst-input">
            <span id="nav-span">Welcome User Enter your city to go,</span>
            <br></br>
            <input
              type="text"
              name="cityname"
              className="nav-input"
              placeholder="Enter your city"
              onChange={handleclick}
            />
            <Button className="constnav-button" onClick={() => navigate("/Productlist")}>
              Find Cars
            </Button>
          </div>
        </section>
      </nav>
    </>
  );
}

export default NavbarConst;

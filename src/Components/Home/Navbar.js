import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/Navbar.css";
import { Button } from "react-bootstrap";
import Booking from "./Booking";

function NavbarConst() {
    const [message,setMessage] = useState('');
   // const getInputValue = (event) => {
      //  const userValue = event.targetrvalue;
       // console.log(userValue);
    //}
     const getInputValue = event => {
   setMessage(event.target.value);

   //console.log('value is:', event.target.value);
  };
    const handleClick = event => {
        event.preventDefault();
        console.log('after onlick : ',message);
    }
    const data = {message};
    console.log("data : ",data.message);
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
    <Booking data = {data.message}/>
    
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
            <span id="nav-span">Welcome User Enter your city to go {message},</span>
            <br></br>
            <input
              type="text"
              name="message"
              className="nav-input"
              placeholder="Enter your city"
              //onChange={handleclick}
              onChange={getInputValue}     
      />
            <Button className="constnav-button" onClick={handleClick}>
              Find Cars
            </Button>
      
          </div>
        </section>
      </nav>
    </>
  );
}

export default NavbarConst;

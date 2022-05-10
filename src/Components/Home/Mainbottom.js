import React from "react";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Bottmcontent from "./Bottmcontent";
// import "../../Styles/Bottomcontent.css";
const content = [
  {
    id: 0,
    carimg: "Fastservices.jpg",
    cartitle: "Fast Services",
    carbody:
      "Fast Services in Kolkata is one of the leading businesses in the 24 Hours Car Rental. Also known for Car Rental, Car Rental For Outstation, 24 Hours Car Rental, Car Rental-Toyota Innova, Car Rental For Wedding, Luxury Car Rental, 24 Hours Car Rental For Outstation, Car Rental-Toyota Fortuner and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Fast Services, Kolkata.",
  },

  {
    id: 1,
    carimg: "saving.jpg",
    cartitle: "Cars for Every Pocket",
    carbody:
      "From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket",
  },

  {
    id: 2,
    carimg: "select.jpg",
    cartitle: "Renty select",
    carbody:
      "A membership program with Rentythat lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time",
  },

  {
    id: 3,
    carimg: "share.jpg",
    cartitle: "Share and Express",
    carbody:
      "To travel with the lowest fares choose renty Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!",
  },
];

const Mainbottom = () => {
  return (
    <div className="bottom-content">
      <Bottmcontent data={content[0]}></Bottmcontent>
      <Bottmcontent data={content[1]}></Bottmcontent>
      <Bottmcontent data={content[2]}></Bottmcontent>
    </div>
  );
};

export default Mainbottom;

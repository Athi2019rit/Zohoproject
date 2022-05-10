import React from "react";
import { Card } from "react-bootstrap";
import "../../Styles/Bottomcontent.css";
const Bottmcontent = () => {
  return (
    <div className="bottom-content">
      <Card style={{ width: "25rem" }}>
        <Card.Img id="car-image" variant="top" src="Fastservices.jpg" />
        <Card.Body>
          <Card.Title id="title">"Fast Services"</Card.Title>
          <Card.Text>
            Car Rental For Outstation, 24 Hours Car Rental, Car Rental-Toyota
            Innova, Car Rental For Wedding, Luxury Car Rental, 24 Hours Car
            Rental For Outstation, Car Rental-Toyota Fortuner and much more.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img id="car-image" variant="top" src="saving.jpg" />
        <Card.Body>
          <Card.Title id="title">"Cars for Every Pocket"</Card.Title>
          <Card.Text>
            {" "}
            "From Sedans and SUVs to Luxury cars for special occasions, we have
            cabs to suit every pocket"
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img id="car-image" variant="top" src="select.jpg" />
        <Card.Body>
          <Card.Title id="title">"Renty select"</Card.Title>
          <Card.Text >
            {" "}
            "A membership program with Rentythat lets you ride a Prime Sedan at
            Mini fares, book cabs without peak pricing and has zero wait time"
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img id="car-image" variant="top" src="share.jpg" />
        <Card.Body>
          <Card.Title id="title">Share and Express</Card.Title>
          <Card.Text>
            "To travel with the lowest fares choose renty Share. For a faster
            travel experience we have Share Express on some fixed routes with
            zero deviations. Choose your ride and zoom away!"
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Bottmcontent;

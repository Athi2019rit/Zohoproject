import React from "react";
import Booking from "./Booking";
import "../../Styles/Productlist.css";

const Productlist = () => {
  return (
    <div>
      <Booking />
      <div className="rowduct">
        <div className="column-left">
          <h2>Column left</h2>
        </div>
        <div className="column-right">
          <h2>Column right</h2>
        </div>
      </div>
    </div>
  );
};

export default Productlist;

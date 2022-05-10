import React from "react";
import "../../Styles/Partners.css";

const Partners = () => {
  return (
    <div className="partner-bg">
      <h1 className="partner-header">Our Partners</h1>
      <div className="partner-logo">
        <img src="./icon/honda.png" alt="Honda logo" />
        <img src="./icon/fiat.png" alt="Honda logo" />
        <img src="./icon/chevrolet.png" alt="Honda logo" />
        <img src="./icon/skoda.png" alt="Honda logo" />
        <img src="./icon/mahindra.png" alt="Honda logo" />
        {/* <img src="./icon/chevrolet.png" alt="Honda logo" /> */}
      </div>
    </div>
  );
};

export default Partners;

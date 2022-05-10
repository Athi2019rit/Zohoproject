import React from "react";
import data from "./Navbar"
import "../../Styles/Booking.css";
const Booking = (props) => {
  return (
    <div className="background">
      <div className="wrapper">

		
		<div className="form_container">
		 <form name="form">
        <div className="heading">
        <h2>Registion Form</h2>
      </div>
			<div className="form_wrap fullname">
				<div className="form_item">
					<label>First Name</label>
					<input type="text"/>
					<div className="error" id="fname"></div>  
				</div>
				<div className="form_item">
					<label>Last Name</label>
					<input type="text"/>
					<div className="error" id="lname"></div>  
				</div>
			</div>
			<div className="form_wrap">
				<div className="form_item">
					<label>Email Address</label>
					<input type="text"/>
					<div className="error" id="email"></div>  
				</div>
			</div>
			<div className="form_wrap">
				<div className="form_item">
					<label>Phone</label>
					<input type="text"/>
					<div className="error" id="phone"></div>  
				</div>
			</div>
			<div className="form_wrap select_box">
				<div className="form_item">
					<label>Current Location</label>
					<select name="currentLocation">
						<option>Chennai</option>
						<option>Coimbatore</option>
						<option>Sathyamangalam</option>
						<option>Rajapalayam</option>
					</select>
					<div className="error" id="city"></div>  
				</div>
				<div className="form_item">
					<label>Destination</label>
					<select name="Destination">
                        <option></option>
						<option>Chennai</option>
						<option>Coimbatore</option>
					    <option>Sathyamangalam</option>
						<option>Rajapalayam</option>
					</select>
					<div className="error" id="country"></div>  
				</div>
			</div>

			<div className="btn">
			 <input type="submit" value="Submit"/>
			</div>
		 </form>
		</div>
	 </div>
    </div>
  );
};

export default Booking;

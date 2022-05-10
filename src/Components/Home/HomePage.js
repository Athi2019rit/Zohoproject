import "../../Styles/HomePage.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BodyCarousel from "./BodyCarousel";
import Bottmcontent from "./Bottmcontent";
import Footer from "./Footer";

const HomePage = () => {
  const navigate = useNavigate();
  window.addEventListener("scroll", function () {
    var header = document.querySelector("section");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    // <div className="body">
    //   <nav className="homenav">
    //     <img className="img" src="./iconcar.png" alt="errorloading" />
    //     <h1 className="header">Car Renty</h1>
    //     <ul>
    //       {/* <li>
    //         <Link to="/Home">HOME</Link>
    //       </li> */}
    //       <li>
    //         <Link to="/Login">LOGIN</Link>
    //       </li>
    //       <li>
    //         <Link to="/Register">REGISTER</Link>
    //       </li>
    //       <li>
    //         <a href={"#link1"}>Partners </a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <BodyCarousel />
    //   <Partners id="link1" />
    // </div>
    <>
      <nav>
        <section className="header">
          <a href="" className="logo">
            CAR RENTY
          </a>
          <ul>
            <li>
              <a className="nav-button" href="">
                Home
              </a>
            </li>
            <li>
              <a className="nav-button" href="">
                About
              </a>
            </li>
            <li>
              <Link className="nav-button" to="/Form">
                Login
              </Link>
            </li>
            <li>
              <a className="nav-button" href="">
                Partners
              </a>
            </li>
          </ul>
        </section>
        <section className="banner">
          <BodyCarousel />
          <div className="service-card">
            <h1 className="Home-head">Why should you have to choose us ?</h1>
            <Bottmcontent />
            <Footer />
          </div>
        </section>
      </nav>
    </>
  );
};

export default HomePage;

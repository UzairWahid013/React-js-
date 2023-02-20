import React, { useContext, useState } from "react";
import "../Home/styleHome.css";
import Carousel from "../../components/CarouselPart";
import LogIn from "../../components/Register/Login";
import Signup from "../../components/Register/Signup";
import Products from "../products/Products";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="Home-container">
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="register-container">
          <button className="btn" onClick={() => setShow(true)}>
            Login
          </button>
          <button className="btn" onClick={() => setShow(false)}>
            Signup
          </button>
          {show ? <LogIn /> : <Signup />}
        </div>
      </div>
      <div>{/* <Products /> */}</div>
    </>
  );
};

export default Home;

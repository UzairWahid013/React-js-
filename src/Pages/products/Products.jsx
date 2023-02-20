import React, { useEffect, useState } from "react";
import { LAPTOP_API } from "../../config/Constant";
import "../products/productStyle.css";
const Products = () => {
  const [laptopData, setLaptopData] = useState([]);

  const GetData1 = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLaptopData(data.products);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    GetData1(LAPTOP_API);
  }, []);


  return (
    <>
      <div class="float-child">
               {laptopData.map((data) => {
          const { id, title, description, price, brand, images, category } =
            data;
          return (
            <div key={id}>
              <div class="float-container">
                <img src={images[0]} alt="" width="500px" height="300px" />
                <h1>{title}</h1>
                <p>{description}</p>
                <p>
                  <b>Brand : </b>
                  {brand}
                </p>
                <p>
                  <b>Category : </b>
                  {category}
                </p>
                <p>
                  <b>Price : </b>
                  {price} $
                </p>
                <div className="Class-btn">
                  <button className="Button">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="float-child">
        {laptopData.map((data) => {
          const { id, title, description, price, brand, images, category } =
            data;
          return (
            <div key={id}>
              <div class="float-container">
                <img src={images[3]} alt="" width="500px" height="300px" />
                <h1>{title}</h1>
                <p>{description}</p>
                <p>
                  <b>Brand : </b>
                  {brand}
                </p>
                <p>
                  <b>Category : </b>
                  {category}
                </p>
                <p>
                  <b>Price : </b>
                  {price} $
                </p>
                <div className="Class-btn">
                  <button className="Button">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;

import React from "react";
import { Link } from "react-router-dom";
import "./scss/styles.scss";
import { IProductCardProps } from "./type";

const Home = ({ productcard, handleCart }: IProductCardProps) => {
  const { id, title, price, description, image } = productcard;
  if (!id) {
    return <p></p>;
  }
  return (
    <div className="product-card">
      <Link to="/cart">go to cart</Link>
      <div key={id}>
        <img
          src={image}
          className="product-image"
          alt="product"
          height="200px"
        />
        <h4 className="product-name">{title}</h4>
        <div className="description-container">
          <p className="description">{description}</p>
        </div>

        <h4 className="product-price">$ {price}</h4>
        <button className="handlecart-btn" onClick={() => handleCart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Home;

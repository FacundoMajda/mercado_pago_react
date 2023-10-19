//@ts-check

import React from "react";
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

import axios from "axios";

import "./Product.css";

const Product = ({ id, title, src, description, price }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("APP_USR-bc3717a9-fc37-416b-ac01-19e7ca8dc9ce");

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3000/create-order", {
        description: { title },
        price: { price },
        quantity: 1,
        currency: "ARS",
      });
      console.log(response);

      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className="card-product">
      <div className="card">
        <h3 className="title">{title}</h3>
        <div className="img-container">
          <img src={src} alt={title} className="product-img" />
        </div>
        <div className="product-description">
          {description}
          <div />
          <p className="price">${price}</p>
        </div>
      </div>

      <div className="button-container">
        <button onClick={handleBuy} className="buy-button">
          Comprar
        </button>
        {preferenceId && (
          <Wallet
            initialization={{
              preferenceId: preferenceId,
              redirectMode: "modal",
            }}
          />
        )}
        <button className="cart-button">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Product;

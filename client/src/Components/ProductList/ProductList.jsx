import React from "react";
import Product from "../Product/Product.jsx";
import "./ProductList.css";

const ProductList = () => {
  const productData = [
    {
      id: 1,
      title: "Producto 1",
      imageSrc: "../../assets/products/carne-frita-su-propia-salsa.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci",
      price: 191.99,
    },
    {
      id: 2,
      title: "Producto 2",
      imageSrc: "../../assets/products/carne-frita-su-propia-salsa.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci",
      price: 129.99,
    },
    {
      id: 3,
      title: "Producto 3",
      imageSrc: "../../assets/products/carne-frita-su-propia-salsa.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci",
      price: 139.99,
    },
  ];

  return (
    <div className="product-list">
      {productData.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          src={product.imageSrc}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;

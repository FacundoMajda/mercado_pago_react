import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProductList from "../src/Components/ProductList/ProductList";

import "./App.css";
const App = () => {
  return (
    <>
      <div className="Body">
        <ProductList />
      </div>
    </>
  );
};

export default App;

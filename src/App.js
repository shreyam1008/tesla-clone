import "./App.css";
import React from "react";
import Header from "./components/Header";

import Accessories from "./assets/Desktop-Accessories.jpg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

import Item from "./components/Item";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="app_itemsContainer">
        <Item
          title="ssome cool shit"
          desc="description of the product"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnText=""
          rightBtnLink=""
          twoButtons={true}
          first
        />
        -------------------------------
        <Item
          title="prashatn is not ccool"
          desc="description of the product"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="order now"
          leftBtnLink=""
          rightBtnText=""
          rightBtnLink=""
          twoButtons={false}
        />
      </div>
    </div>
  );
};

export default App;

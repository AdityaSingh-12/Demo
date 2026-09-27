import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooditems from "./components/Fooditems";
import Error from "./components/Error";
import Item from "./components/Item";
function App() {
  let fooditem = ["Salad", "Grilled", "Dal", "Smoothie","Banana"];
  //let fooditem = [];
  return (
    <>
      <h1 className="App">Healthy Food</h1>
      <Error fooditem={fooditem}></Error>
      <Fooditems fooditem={fooditem}></Fooditems>
    </>
  );
};

export default App;

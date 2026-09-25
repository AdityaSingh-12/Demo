import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fooditems from "./components/fooditems";
function App() {
  //let fooditem = ["Salad", "Grilled", "Dal", "Smoothie", "Banana"];
   let fooditem = [];

  return (
    <>
      <h1 className="App">Healthy Food</h1>
      
      <fooditems item={fooditem}></fooditems>
    </>
  );
};

export default App;

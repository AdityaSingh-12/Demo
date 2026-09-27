import Item from " ./Item.jsx";
const Fooditems =() => {
  //let fooditem = ["Salad", "Grilled", "Dal", "Smoothie","Banana"];
  //let fooditem = [];
    return (
      <ul className="list-group">

        //ye jo fooditems wla comp usme es single list item bnaya hai humne with name "item" esko bhi ek alag component me bnana chahiye tha
  {fooditem.map((item) => (
    <Item fooditem={item}></Item>
  ))}
</ul>
    );
  };
  export default Fooditems;
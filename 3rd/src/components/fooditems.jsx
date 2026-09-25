
const fooditems = ({item}) => {
return (
<ul className="list-group">
  {item.map((item) => (
    <li key ={item}className="list-group-item">{item}</li>
  ))}
</ul>
);
};
export default fooditems;
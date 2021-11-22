import './index.css';
import Item from '../items/items.jsx';


function ItemsList({items}) {

  return (
   <section className="item-list">
       {
           items.map((product) => {
               return(
                   <Item
                       key={product.id}
                       product={product}
                   /> 
           )})
       }
   </section>
)};

export default ItemsList;
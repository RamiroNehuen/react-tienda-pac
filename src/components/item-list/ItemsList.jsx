import './index.css';
import { useContext } from 'react';
import Item from '../items/Items'
import { items } from '../../context/ContextProduct/ContextProduct';

function ItemsList() {

    const products = useContext(items)

  return (
   <section className="item-list">
       {
           products.map(() => {
               return(
                        <Item
    
                        />
           )})
       }
   </section>
)};

export default ItemsList;
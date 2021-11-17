import './index.css';
import Item from '../items/items.jsx';
import {products} from '../items/items';
import { useState } from 'react';



function ItemsList() {

  const [items, setItems]= useState ([]);

    const traerProductos= new Promise ((resolve, reject) => {
    setTimeout (() =>{
      resolve(products);
    },2000);
  });
  traerProductos.then((res)=>{
    setItems(res);
  });

  return (
   <section className="item-list">
       {
           items.map((product) => {
               return(
                   <Item
                       id={product.id}
                       img={product.img}
                       title={product.title}
                       price={product.price}
                       description={product.description}
                   /> 
           )})
       }
   </section>
)};

export default ItemsList;
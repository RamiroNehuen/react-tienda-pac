import ItemsList from '../../components/item-list/ItemsList';
import './index.css';
import { products } from '../../components/items/item-data.js';
import { useState } from 'react';

const ItemListContainer = (props) => {

    const [items, setItems]= useState ([]);

    const bringProducts= new Promise ((resolve, reject) => {
        setTimeout (() =>{
                resolve(products);
                },2000);
            });
            bringProducts.then((res)=>{
            setItems(res);
            });

    return (
        <section className="landing-wrapper">
            <div className="landing-container"> 
                <h1 className="landing-text">{props.title}</h1>
                <h2 className="landing-text">{props.subTitle}</h2>
                <h3 className="landing-text">{props.location}</h3>
                <p className="landing-text">{props.greeting}</p>
            </div>
            <ItemsList items={items}/>
        </section>    
    );
};

export default ItemListContainer;
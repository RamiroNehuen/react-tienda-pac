import ItemsList from '../../components/item-list/ItemsList';
import './index.css';
import { products } from '../../components/items/item-data.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/img/icons/logoPac.png'


const ItemListContainer =() => {

    const [items, setItems]= useState ([]);

    const [loader, setLoader] = useState (true);

    const { catId } = useParams ();

    useEffect(() => {
        setLoader(true);
        const bringProducts= new Promise ((resolve) => {
            setTimeout (() =>{
                    resolve(products);
                    },2000);
                });
                bringProducts.then((res)=>{
                    catId ? setItems(res.filter(item => item.category === catId)) :
                setItems(res);
                }).finally(()=> {setLoader(false)});
    },[catId]);

    

    return (
        loader ? <div className="loader"><img src={logo} alt="logo de pac" /></div>:
        <section className="item-list-wrapper">
            <h2>Nuestros Productos</h2>         
            <ItemsList items={items}/>
        </section>    
    );
};

export default ItemListContainer;
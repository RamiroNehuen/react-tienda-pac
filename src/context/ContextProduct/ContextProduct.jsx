import React from 'react';
import { useContext } from 'react';
import { products } from '../../components/items/item-data.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Products = React.createContext();

export function ProductsProvider ({children}) {

    const [items, setItems]= useState ([]);

    const [loader, setLoader] = useState (true);

    const { catId } = useParams ();

    const [goToCart, setGoToCart] = useState (false);

    const [number, setNumber] = useState(0);

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

    useEffect(() => {
        setLoader (true)
        const getItem = new Promise ((resolve, reject) =>{
            setTimeout (() =>{
                resolve(products)
            },2000)
        });
        getItem.then((resp) => {
            catId &&
            setItems(resp.find(item => item.id === catId))
        }).finally(()=>{setLoader(false)})
    }, [catId]);

    const onAdd = (cantidad) => {
        console.log({ ...items, quantity: cantidad });
        setGoToCart(true);
    };

    const increase = () => {
        number !== items.stock && setNumber (number+1);        
    };

    const decrease = () => {
        number !== 0 && setNumber (number-1)    
    };

    return (
        <Products.Provider value={ items, loader, onAdd(), goToCart, increase(), decrease() }>
            {children}
        </Products.Provider>
    )
};

export function useOnAdd () {
    return useContext (Products).onAdd
};

export function useIncrease () {
    return useContext (Products).increase
};

export function useDecrease () {
    return useContext (Products).decrease
};

export default Products;
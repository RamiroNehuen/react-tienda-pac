import './index.css';
import {useState} from 'react';

const ItemCount = ({ stock, onAdd }) => {
    
    const [number, setNumber] = useState(0);

    const increase = () => {
        number !== stock && setNumber (number+1);        
    };

    const decrease = () => {
        number !== 0 && setNumber (number-1)    
    };

   
    return (
        <div className="item-count"> 
            <p>{`Cantidad de Unidadades`}</p>
            <p>{`${number}`}</p>
            <button className="button" onClick={increase}>+</button>
            <button className="button" onClick={decrease}>-</button>
            <div>
                <button className="button" disabled={number===0} onClick={()=>onAdd(number)}>Añadir al carrito</button>
            </div>
        </div>
        );
};

export default ItemCount;
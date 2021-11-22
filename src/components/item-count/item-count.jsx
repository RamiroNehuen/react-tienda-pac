import './index.css';
import {useState} from 'react';

const ItemCount = () => {
    
    const [number, setNumber] = useState(1);
    const stock = 5;

    const increase = () => {
        if (number < stock) {
            setNumber (number + 1);
        } else {
            alert('Alcanzo el máximo disponible, no puede añadir más unidades.');
        };
        
    };

    const decrease = () => {
        if (number > 1) {
            setNumber (number - 1)
        } else {
            alert('No puede añadir menos de una unidad al carrito.')
        };        
    };
     
    return (
        <div className="item-count"> 
            <p>{`Cantidad de Unidadades`}</p>
            <p>{`${number}`}</p>
            <button className="button" onClick={increase}>+</button>
            <button className="button" onClick={decrease}>-</button>
            <div>
                <button className="button">Añadir al carrito</button>
            </div>
        </div>
        );
};

export default ItemCount;
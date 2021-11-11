import './index.css';
import {useState} from 'react';

const ItemCount = () => {
    
    const [number, setNumber] = useState(1);
    const stock = 5;

    const incrementar = () => {
        if (number < stock) {
            setNumber (number + 1);
        } else {
            alert('Alcanzo el máximo disponible, no puede añadir más unidades.');
        };
        
    };

    const disminuir = () => {
        if (number > 1) {
            setNumber (number - 1)
        } else {
            alert('No puede añadir menos de una unidad al carrito.')
        };        
    };
     
    return (
        <div> 
            <p>{`Ud. va a ingresar ${number} unidad/es al carrito`}</p>
            <button className="button" onClick={incrementar}>+</button>
            <button className="button" onClick={disminuir}>-</button>
            <div>
                <button className="button">Añadir al carrito</button>
            </div>
        </div>
        );
};

export default ItemCount;
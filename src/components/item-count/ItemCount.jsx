import './index.css';
import {useState} from 'react';
import { useAddItem } from '../../context/CartContext/CartContext'
// import { Link } from 'react-router-dom';

const ItemCount = ({ product }) => {
    
    const addItem  = useAddItem();
    

    // const { goToCart } = useContext(CartContext)
 


    const [number, setNumber] = useState(0);

    const increase = () => {
        number !== product.stock && setNumber (number+1);       
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
                {
                    // goToCart ? <Link to="/cart"><button className="button">Terminar compra</button></Link> :
                    <button className="button"  disabled={number===0} onClick={()=>addItem(product, number)}>Añadir al carrito</button>   
                }
                
            </div>
        </div>
        );
};

export default ItemCount;
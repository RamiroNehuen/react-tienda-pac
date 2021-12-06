import './index.css';
import { useOnAdd, useIncrease, useDecrease, number } from '../../context/ContextProduct/ContextProduct';

const ItemCount = () => {

    const numb = number;
    
    const onAdd = useOnAdd ();

    const increase = useIncrease();

    const decrease = useDecrease ();
   
    return (
        <div className="item-count"> 
            <p>{`Cantidad de Unidadades`}</p>
            <p>{`${numb}`}</p>
            <button className="button" onClick={increase}>+</button>
            <button className="button" onClick={decrease}>-</button>
            <div>
                <button className="button" disabled={numb===0} onClick={()=>onAdd(numb)}>Añadir al carrito</button>
            </div>
        </div>
        );
};

export default ItemCount;
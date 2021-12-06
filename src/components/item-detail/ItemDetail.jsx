import './index.css';
import ItemCount from '../item-count/ItemCount';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { items, goToCart } from '../../context/ContextProduct/ContextProduct';

function ItemDetail () {

    const products = useContext(items)

    const goCart = useContext(goToCart)

    return (
        <section className="item-detail-container">
            <div>
                <img src={products.img} alt="imagen de producto" />
            </div>
            <div className="item-detail-text">
                <h4>{products.title}</h4>
                <h3>{products.price}</h3>
                <p>{products.description}</p>
            </div>
            <div>
                {goCart ? (<><Link to='/cart' className="button">Terminar compra</Link></>) : (<><ItemCount/></>)}
            </div>
        </section>
    );
};

export default ItemDetail;
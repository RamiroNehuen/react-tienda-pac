import './index.css';
import ItemCount from '../item-count/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail ({product, onAdd, goToCart}) {
    return (
        <section className="item-detail-container">
            <div>
                <img src={product.img} alt="imagen de producto" />
            </div>
            <div className="item-detail-text">
                <h4>{product.title}</h4>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
            </div>
            <div>
                {goToCart ? (<><Link to='/cart' className="button">Terminar compra</Link></>) : (<><ItemCount stock={product.stock} onAdd={onAdd}/></>)}
            </div>
        </section>
    );
};

export default ItemDetail;
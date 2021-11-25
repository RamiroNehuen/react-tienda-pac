import './index.css';
import ItemCount from '../item-count/ItemCount';

function ItemDetail ({product}) {
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
                <ItemCount/>
            </div>
        </section>
    );
};

export default ItemDetail;
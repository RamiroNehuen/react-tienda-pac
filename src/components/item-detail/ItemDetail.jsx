import './index.css';
import ItemCount from '../item-count/ItemCount';

function ItemDetail ({product}) {
    return (
        <div className="item-detail-container">
           {
               product.map((product, index)=>{
                   if (index == 0) {
                   return (
                       <>
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
                        </>
                   )}
               })
           }
        </div>
    );
};

export default ItemDetail;
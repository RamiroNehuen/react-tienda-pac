import './index.css';
import ItemCount from '../item-count/ItemCount';



function Items({product}) {
  return (
    <div className="product-card">
      <img src={product.img} alt="imagen ilustrativa de prodcuto" className="card-image"/>
      <div className="card-text">
        <h4>{product.title}</h4>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
      </div>
      <ItemCount/>
    </div>
  )};


export default Items;





import './index.css';
import { Link } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount';



function Items({product}) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id }`}><img src={product.img} alt="imagen ilustrativa de prodcuto" className="card-image"/></Link>
      <div className="card-text">
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
      </div>
      <ItemCount stock={product.stock}/>
    </div>
  )};


export default Items;
import './index.css';
import { Link } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount';
import { useContext } from 'react';
import { items } from '../../context/ContextProduct/ContextProduct';


function Items() {

  const products = useContext(items)

  return (
    <div className="product-card" key = {products.id}>
      <Link to={`/product/${products.id }`}><img src={products.img} alt="imagen ilustrativa de prodcuto" className="card-image"/></Link>
      <div className="card-text">
        <h3>{products.title}</h3>
        <h3>{products.price}</h3>
      </div>
      <ItemCount stock={products.stock}/>
    </div>
  )};


export default Items;
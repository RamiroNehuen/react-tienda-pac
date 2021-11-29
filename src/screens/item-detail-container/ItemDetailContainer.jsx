import './index.css';
import { useEffect, useState } from 'react';
import { products } from '../../components/items/item-data';
import ItemDetail from '../../components/item-detail/ItemDetail';
import { useParams } from 'react-router-dom';
import logo from '../../assets/img/icons/logoPac.png';

function ItemDetailContainer () {

const [productDetail, setProduct] = useState([]);

const [loader, setLoader] = useState (true);

const { itemId } = useParams()

const [goToCart, setGoToCart] = useState (false);


useEffect(() => {
    setLoader (true)
    const getItem = new Promise ((resolve, reject) =>{
        setTimeout (() =>{
            resolve(products)
        },2000)
    });
    getItem.then((resp) => {
        itemId &&
        setProduct(resp.find(item => item.id === itemId))
    }).finally(()=>{setLoader(false)})
}, [itemId]);
        
const onAdd = (cantidad) => {
    console.log({ ...productDetail, quantity: cantidad });
    setGoToCart(true);
};
 

    return (
        loader ? <div className="loader"><img src={logo} alt="logo de pac" /></div> :
        <section>
            <ItemDetail product={productDetail} onAdd={onAdd} goToCart={goToCart}/>
        </section>
            
        
    );
};

export default ItemDetailContainer;
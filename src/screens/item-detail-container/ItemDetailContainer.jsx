import './index.css';
import { useEffect, useState } from 'react';
// import { products } from '../../components/items/item-data';
import ItemDetail from '../../components/item-detail/ItemDetail';
import { useParams } from 'react-router-dom';
import logo from '../../assets/img/icons/logoPac.png';

import { getDoc, getFirestore, doc } from 'firebase/firestore'

function ItemDetailContainer () {

const [product, setProduct] = useState([]);

const [loader, setLoader] = useState (true);

const { itemId } = useParams()

// const [goToCart, setGoToCart] = useState (false);

useEffect(() => {
    setLoader(true);
    const db = getFirestore ()
    const productRef =  doc(db, 'products', itemId)
    getDoc(productRef)
        .then((snapShot)=>{
            if(snapShot.exists){
                setProduct (snapShot.data())
                console.log(snapShot.data())
            }else {
                console.log ('estamos en problemas')
            }
        })
        .finally(()=>{setLoader(false)});
}, [itemId])

        
/*const onAdd = (cantidad) => {
    console.log({ ...productDetail, quantity: cantidad });
    setGoToCart(true);
};*/
 

    return (
        loader ? <div className="loader"><img src={logo} alt="logo de pac" /></div> :
        <section>
            <ItemDetail product={product} />
        </section>
            
        
    );
};

export default ItemDetailContainer;
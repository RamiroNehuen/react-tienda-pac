import './index.css';
import { useEffect, useState } from 'react';
import { products } from '../../components/items/item-data';
import ItemDetail from '../../components/item-detail/ItemDetail';


function ItemDetailContainer () {

    const [productDetail, setProduct] = useState([]);

    const getItem = () => {
        return new Promise ((resolve, reject) =>{
            setTimeout (() =>{
                resolve(products)
            },2000)
        })
    };

    useEffect(()=>{
        getItem()
        .then((resp) => setProduct(resp))
    });
    return (
        <section>
            <ItemDetail key={productDetail.id} product={productDetail}/>
        </section>
    );
};

export default ItemDetailContainer;
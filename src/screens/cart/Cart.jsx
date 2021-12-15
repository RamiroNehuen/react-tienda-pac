import './index.css';
import { useContext, useCallback } from 'react';
import CartContext, { useRemoveItem, useClearAll, useAddOnCart, useRestOnCart } from '../../context/CartContext/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

    const { cartItems }  = useContext(CartContext);

    const removeItem = useRemoveItem();

    const clearAll = useClearAll();

    const addOnCart= useAddOnCart();

    const restOnCart = useRestOnCart ();

    const getTotal = useCallback(
        () => {
            let total = 0
            cartItems.forEach(product => {
                total = total + product.price * product.quantity
                              
            });
            return total
        },
        [cartItems],
    )

    
   return (cartItems.length === 0) ?
        <>
            <h2>Todavía no has elegido productos!</h2>
            <Link to="/products"><button className="button">Volver a la tienda</button></Link>
        </>
        :
        <>
            <section>
                {cartItems?.map((product) => {
                    return (
                        <div className="cart-product" key={product.id}>
                            <h3>{product.title}</h3>
                            <img src={product.img} alt="imagen ilustrativa del producto"/>
                            <h4>$ {product.price*product.quantity}</h4>
                            <h4>Cantidad de unidadies:</h4>
                            <span><button className="button" onClick={()=>addOnCart(product.id)}>+</button>{product.quantity}<button className="button" disabled={product.quantity===1} onClick={()=>restOnCart(product.id)}>-</button></span>
                            <button className="button" onClick={()=>removeItem(product)}>Eliminar producto</button>
                        </div>
                    )
                })}
            </section>
            <section>
                <h2>Valor total de la compra</h2>
                <h2>{getTotal()}</h2>
                <button className="button">Terminar compra</button>
                <button className="button" onClick={()=>clearAll()}>Borrar todo</button>
            </section>
        </>



//    if(cartItems.length === 0){
//        return (
//             <>
//                 <h2>Todavía no has elegido productos!</h2>
//                 <Link to="/products"><button className="button">Volver a la tienda</button></Link>
//             </>
//     );}else {
//         return (
//         <>
             
//         </>
//         );
//     }
};

export default Cart;


// cartItems?.reduce((previousValue, currentProduct)=>{
//     return previousValue + currentProduct.price*currentProduct.quantity
// }, 0)
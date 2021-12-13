import './index.css';
import { useContext } from 'react';
import CartContext, { useRemoveItem, useClearAll, useAddOnCart, useRestOnCart } from '../../context/CartContext/CartContext'


const CartWidget = () => {

    const { cartItems }  = useContext(CartContext);

    const removeItem = useRemoveItem();

    const clearAll = useClearAll();

    const addOnCart= useAddOnCart();

    const restOnCart = useRestOnCart ();

    
    return (
        <>
            <section>
                {cartItems?.map((product) => {
                    return (
                        <div className="cart-product" key={product.id}>
                            <h3>{product.title}</h3>
                            <img src={product.img} alt="imagen ilustrativa del producto"/>
                            <h4>{product.price}</h4>
                            <h4>Cantidad de unidadies:</h4>
                            <span><button className="button" onClick={()=>addOnCart(product.id)}>+</button>{product.quantity}<button className="button" onClick={()=>restOnCart(product.id)}>-</button></span>
                            <button className="button" onClick={()=>removeItem(product)}>Eliminar producto</button>
                        </div>
                    )
                })}
            </section>
            <section>
                <h2>Valor total de la compra</h2>
                <button className="button">Terminar compra</button>
                <button className="button" onClick={()=>clearAll()}>Borrar todo</button>
            </section>
        </>
    );
};

export default CartWidget;
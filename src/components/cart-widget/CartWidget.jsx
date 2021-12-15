import './index.css';
import cartIcon from '../../assets/img/icons/cart-icon.png';
import { useContext, useCallback } from 'react';
import CartContext from '../../context/CartContext/CartContext'


const CartWidget = () => {

    const { cartItems }  = useContext(CartContext);

    const getItemTotal = useCallback(
        () => {
            let total = 0
            cartItems.forEach (product => {
                total = product.quantity + total
            })

            return total
        },
        [cartItems],
    )

    return (
        <span className='cartW-container'>
            <img src={cartIcon} alt="Cart Icon" className="cart-icon"/>
            {
                (cartItems.length !== 0) ?
                <span className='cart-count'>
                    {getItemTotal()}
                </span>
                :
                <span></span>
            }
            
            
        </span>
    )};



export default CartWidget;




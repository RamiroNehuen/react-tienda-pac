import './index.css';
import cartIcon from '../../assets/img/icons/cart-icon.png';

const CartWidget = () => {
    return (
        
        <a href="#cart">
            <img src={cartIcon} alt="Cart Icon" className="cart-icon"/>
        </a>
        
    );
};

export default CartWidget;
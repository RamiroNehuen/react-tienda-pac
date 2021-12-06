import './index.css'
import logo from '../../assets/img/icons/logoPac.png'
import { Link } from 'react-router-dom';
import { categories } from '../items/item-data';
import cartIcon from '../../assets/img/icons/cart-icon.png';
import { Fragment } from 'react';


const Header = () => {
    return (
        <nav className="nav-wrapper topnav" id="myTopnav">
                <span>
                    <Link className="link" to="/"><img src={logo} alt="Logo PAC" className="logo-nav"/></Link>
                </span>
                <span>
                    <Link className="link" to="/">Inicio</Link>
                </span>
                <span>
                    <Link className="link" to="/about-us">Sobre Nosotros</Link>
                </span>
                <Fragment>
                    {categories.map((cat) =>{
                        return (
                            <span className="nav-links" key={cat.id}>
                                <Link className="link" to={cat.address}>{cat.text}</Link>
                            </span>    
                        )
                    })}
                </Fragment>
                <span>
                    <Link className="link" to="/cart"><img src={cartIcon} alt="Cart Icon" className="cart-icon"/></Link>
                </span>            
        </nav>
    );
};

export default Header;
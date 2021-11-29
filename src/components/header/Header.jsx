import './index.css'
import logo from '../../assets/img/icons/logoPac.png'
import { Link } from 'react-router-dom';
import { categories } from '../items/item-data';
import cartIcon from '../../assets/img/icons/cart-icon.png';

const Header = () => {
    return (
        <nav className="nav-wrapper">
            <section className="nav-container">
                <div>
                    <Link className="link" to="/"><img src={logo} alt="Logo PAC" className="logo-nav"/></Link>
                </div>
                <ul className="nav-links">
                    <li><Link className="link" to="/">Inicio</Link></li>
                    <li><Link className="link" to="/about-us">Sobre Nosotros</Link></li>
                    <li><Link className="link" to="/cart"><img src={cartIcon} alt="Cart Icon" className="cart-icon"/></Link></li>
                </ul>
            </section>
            <section className="second-line">
                {categories.map((cat) =>{
                    return (
                        <div className="nav-links" key={cat.id}>
                            <Link className="link" to={cat.address}>{cat.text}</Link>
                        </div>    
                    )
                })}
            </section>
        </nav>
    );
};

export default Header;
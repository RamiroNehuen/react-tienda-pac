import './index.css'
import logo from '../../assets/img/icons/logoPac.png'
import CartWidget from '../cart-widget/CartWidget';
import { Link } from 'react-router-dom';
import { categories } from '../items/item-data';

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
                </ul>
                <div>
                    <CartWidget/>    
                </div>   
            </section>
            <section className="second-line">
                {categories.map((cat) =>{
                    return (
                        <div className="nav-links">
                            <Link className="link" key={cat.id} to={cat.address}>{cat.text}</Link>
                        </div>    
                    )
                })}
            </section>
        </nav>
    );
};

export default Header;
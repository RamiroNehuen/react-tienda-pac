import './index.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/img/icons/logoPac.png'
import CartWidget from '../cart-widget/cart-widget';

const Header = () => {
    return (
        <Navbar variant="dark" className="nav-wrapper">
            <Container className="nav-container">
                <div>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo PAC" className="logo-nav"/>
                    </Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#Tienda">Tienda</Nav.Link>
                        <Nav.Link href="#sobre-nosotros">Sobre Nosotros</Nav.Link>
                    </Nav>
                </div>
                <div>
                    <CartWidget/>    
                </div>   
            </Container>
        </Navbar>
    );
};

export default Header;
import ItemsList from '../../components/item-list/ItemsList';
import './index.css';
import logo from '../../assets/img/icons/logoPac.png'
import { useContext } from 'react';
import { loader} from '../../context/ContextProduct/ContextProduct'


const ItemListContainer =() => {

    const load = useContext(loader)

    return (
        load ? <div className="loader"><img src={logo} alt="logo de pac" /></div>:
        <section className="item-list-wrapper">
            <h2>Nuestros Productos</h2>         
            <ItemsList />
        </section>    
    );
};

export default ItemListContainer;
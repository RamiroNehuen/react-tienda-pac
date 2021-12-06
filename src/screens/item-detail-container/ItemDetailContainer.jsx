import './index.css';
import ItemDetail from '../../components/item-detail/ItemDetail';
import logo from '../../assets/img/icons/logoPac.png';
import { useContext } from 'react';
import { loader } from '../../context/ContextProduct/ContextProduct';

function ItemDetailContainer () {

    const load = useContext(loader) 

    return (
        load ? <div className="loader"><img src={logo} alt="logo de pac" /></div> :
        <section>
            <ItemDetail/>
        </section>
            
        
    );
};

export default ItemDetailContainer;
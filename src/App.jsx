
import './App.css';
import Header from'./components/header/Header.jsx';
// import ItemListContainer from'./screens/item-list-container/ItemListContainer';
import ItemDetailContainer from './screens/item-detail-container/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ItemListContainer 
        title='TIENDA PAC' 
        subTitle='PRODUCTORES A CONSUMIDORES' 
        location='BUENOS AIRES - ZONA SUR' 
        greeting='¡Bienvenidos! Aquí les ofrecemos productos agroecológicos y cooperativos directo de los productoes a los consumidores.'
      /> */}

      <ItemDetailContainer/>
    </div>
  );
};

export default App;

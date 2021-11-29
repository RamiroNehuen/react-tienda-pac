
import './App.css';
import Header from'./components/header/Header.jsx';
import ItemListContainer from'./screens/item-list-container/ItemListContainer';
import ItemDetailContainer from './screens/item-detail-container/ItemDetailContainer';
import AboutUs from './screens/about-us/AboutUs';
import Landing from './screens/landing/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './components/cart-widget/CartWidget';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/" element={<Landing/>} />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget/>} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
};

export default App;

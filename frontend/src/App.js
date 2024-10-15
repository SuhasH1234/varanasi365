import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import NewCollections from './Components/NewCollections/NewCollections';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/saree' element={<ShopCategory category="Saree"/>} />
        <Route path='/stone-carvings' element={<ShopCategory category="Stone Carvings"/>} />
        <Route path='/bangles-bracelets' element={<ShopCategory category="Bangles and Bracelets"/>} />
        <Route path='/rudraksha-mala' element={<ShopCategory category="Rudraksha Mala"/>} />
        <Route path='/wooden-toys' element={<ShopCategory category="Wooden Toys"/>} />
        <Route path='/gulabi-minakari' element={<ShopCategory category="Gulabi Minakari"/>} />
        <Route path='/carpets' element={<ShopCategory category="Hand Knotted Carpets"/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />

        <Route path='/newcollection' element={<NewCollections/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      


    </div>
  );
}

export default App;

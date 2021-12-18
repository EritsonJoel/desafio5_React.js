import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import NavBar from './Navbar/NavBar';
import Cart from './detalle/Cart';
import ItemListContainer from './ItemListContainer';
import ItemDetailsContainer from './detalle/ItemContainerDetails';
import  CartContextProvider from './Context/CartContex';//le importo para poderlo usar contexto


function App() {
  return (
    <div className="App">

      <CartContextProvider>{/*llamoa contexto:  para asi definir el ambito en donde voy A Utilizar los estados y funciones globales
          CartContextProvider : es el componente que cree en CartContext.js */}
        <BrowserRouter>

        <NavBar/>

        <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/detalle/:idcategoria' element={<ItemDetailsContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
        
        </CartContextProvider>
        
    </div>
  );
}

export default App;

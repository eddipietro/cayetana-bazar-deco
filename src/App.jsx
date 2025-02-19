import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Venta from "./components/Venta/Venta";
import { HashRouter, Route, Routes } from "react-router-dom";
import CartCustomProvider from "./context/CartContext";
import WhatsAppButton from "./components/whatsApp/whatsApp";
import Promos from "./components/Promos/Promos";


function App() {
  return (
    <HashRouter>
      <CartCustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer  />} />
                 {/* en ItemListContainer va un mensaje : asi quedaria la linea           <Route path="/" element={<ItemListContainer  mensaje="Promociones"/>} />    */}

          <Route path="/promos" element={<Promos />} />

          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/venta" element={<Venta />} />
        </Routes>
        <WhatsAppButton />
      </CartCustomProvider>
    </HashRouter>
  );
}

export default App;
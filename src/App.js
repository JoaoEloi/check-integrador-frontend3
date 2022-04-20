import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './Pages/AboutUs'
import Products from './Pages/Products'
import Carrinho from './Pages/Carrinho'
import Admin from './Pages/Admin'
import CartProvider from './context/cart'


export default function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header className="home_header" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/administ" element={<Admin />} />
            <Route path="/sobrenos" element={<AboutUs />} />
            <Route path="*" element={<h1>Page not found - 404</h1>} />
          </Routes>
          <Footer className="home_footer" />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

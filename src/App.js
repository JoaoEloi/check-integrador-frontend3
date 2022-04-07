import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from "./Pages/AboutUs";


export default function App() {
  return(
  <>
    <Header className="home_header"/>

    <Home />

    <Footer className="home_footer"/>
  </>


    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={Home} />
    //     <Route path="/" element={AboutUs} />
    //   </Routes>
    // </BrowserRouter>

    
  )
}

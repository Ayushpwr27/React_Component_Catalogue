import './App.css';
import Mainnav from './Components/Mainnav';
import Mainpage from './Components/Mainpage';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Sidebar from './Components/Sidebar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Carousal from './Components/Carousal';
import Features from './Components/Features';
import Cover from './Components/Cover';
import Product from './Components/Product';
import Footer from './Components/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';
function App() {
  return (
    <>
    <BrowserRouter>
    <Mainnav/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/hero" element={ <Hero/>}></Route>
        <Route path="/sidebar" element={<Sidebar/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/carousal" element={<Carousal/>}></Route>
        <Route path="/features" element={<Features/>}></Route>
        <Route path="/cover" element={<Cover/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

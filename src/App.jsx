import "./App.css";
import Footer from "./Componenets/Footer";
import Navbar from "./Componenets/Navbar";
import { Outlet } from 'react-router-dom'
import  {ProductProvider } from "./ContextAPI/ProductsContext";

function App() {
  return (
    <ProductProvider>
      <Navbar />
      <Outlet/>
      <Footer />
      
    </ProductProvider>
  );
}

export default App;

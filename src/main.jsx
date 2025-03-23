import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductContainer from "./Componenets/ProductContainer";
import SingleProductPage from './Componenets/SingleProductPage.jsx';
import AddToCart from './Componenets/AddToCart.jsx';
import AddToWishlist from './Componenets/AddToWishlist.jsx';
import Fashion from './Componenets/Category/Fashion/Fashion.jsx';
import Search from './Componenets/Search/Search.jsx';
import Electronics from './Componenets/Category/Electronics/Electronics.jsx';
import Furniture from './Componenets/Category/Furniture/Furniture.jsx';
import Sports from './Componenets/Category/Sports/Sports.jsx';
import Grocery from './Componenets/Category/Grocery/Grocery.jsx';
import Vehicles from './Componenets/Category/Vehicles/Vehicles.jsx';
import Beauty from './Componenets/Category/Beauty/Beauty.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductContainer/>,
      },
      {
        path:"/product/:id/:productName",
        element: <SingleProductPage/>,
      },
      {
        path: "/addtocart",
        element: <AddToCart/>,
      },
      {
        path: "/addtowishlist",
        element: <AddToWishlist/>,
      },
      {
        path: "/fashion",
        element: <Fashion/>,
      },
      {
        path: "search/:query",
        element: <Search/>,
      },
      {
        path: "/electronics",
        element: <Electronics/>,
      },
      {
        path: "/home-decoration",
        element: <Furniture/>,
      },
      {
        path:"sports-accessories",
        element:<Sports/>,
      },
      {
        path:"/grocery",
        element:<Grocery/>
      },
      {
        path:"/vehicles",
        element:<Vehicles/>
      },
      {
        path:"/beauty",
        element:<Beauty/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

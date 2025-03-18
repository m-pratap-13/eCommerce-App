import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductContainer from "./Componenets/ProductContainer";
import SingleProductPage from './Componenets/SingleProductPage.jsx';
import AddToCart from './Componenets/AddToCart.jsx';
import AddToWishlist from './Componenets/AddToWishlist.jsx';
import Fashion from './Componenets/Category/Fashion.jsx';
import Search from './Componenets/Search/Search.jsx';
import Electronics from './Componenets/Category/Electronics/Electronics.jsx';
import Furniture from './Componenets/Category/Furniture/Furniture.jsx';

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
        path: "/furniture",
        element: <Furniture/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // {/* </StrictMode>, */}
)

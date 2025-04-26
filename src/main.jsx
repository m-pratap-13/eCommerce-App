import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CategoriesPage from './pages/CategoriesPage.jsx'
import HomePage from './pages/HomePage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path:"/:categories",
        element:<CategoriesPage/>
      },
      {
        path:"/product/:id/:productName",
        element: <SingleProductPage/>,
      },
      // {
      //   path: "/addtocart",
      //   element: <AddToCart/>,
      // },
      // {
      //   path: "/addtowishlist",
      //   element: <AddToWishlist/>,
      // },
      // {
      
      // {
      //   path: "search/:query",
      //   element: <Search/>,
      // },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)

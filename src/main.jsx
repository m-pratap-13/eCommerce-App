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
        path:"/all-categories",
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
      //   path: "/fashion",
      //   element: <Fashion/>,
      // },
      // {
      //   path: "search/:query",
      //   element: <Search/>,
      // },
      // {
      //   path: "/electronics",
      //   element: <Electronics/>,
      // },
      // {
      //   path: "/home-decoration",
      //   element: <Furniture/>,
      // },
      // {
      //   path:"sports-accessories",
      //   element:<Sports/>,
      // },
      // {
      //   path:"/grocery",
      //   element:<Grocery/>
      // },
      // {
      //   path:"/vehicles",
      //   element:<Vehicles/>
      // },
      // {
      //   path:"/beauty",
      //   element:<Beauty/>
      // }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)

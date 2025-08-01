import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import AddToCartPage from "./pages/AddToCartPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import CategoriesMenu from "./componenets/CategoriesMenu.jsx";
import CategoriesListPage from "./pages/CategoriesListPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categories/:category",
        element: <CategoriesPage />,
      },
      {
        path: "categories-menu",
        element: <CategoriesListPage />,
      },
      {
        path: "/product/:id/:productName",
        element: <SingleProductPage />,
      },
      {
        path: "/addtocart",
        element: <AddToCartPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      // {

      {
        path: "search/:query",
        element: <SearchPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import About from "./pages/about/about.jsx"
import Catalog from "./pages/catalog/catalog.jsx"
import Cart from './pages/cart/cart.jsx'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Catalog",
    element: <Catalog />,
  },
  {
    path: "/Contacts",
    element: <Contacts />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },

]);
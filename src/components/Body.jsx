import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../pages/Wishlist";





const Body = () => {

   const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
  path: "/productpage/:categoryName",
    element: <ProductPage />,
  },
  {
  path: "/cart",
    element: <Cart />,
  },
    {
    path: "/productpage",  
    element: <ProductPage />,
  },
   {
    path: "/product/:productId",  // <-- Add this route!
    element: <ProductDetails />,
  },
{
    path: "/wishlist",  
    element: <Wishlist />,
  },



]);






  return (
    <div>
<RouterProvider router={appRouter}/>


    </div>
  )
}

export default Body
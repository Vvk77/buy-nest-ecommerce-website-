import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext"; // Correct path according to your project



const Navbar = () => {
  const { cart, wishlist } = useContext(CartContext);

  return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-blue-600">BUY-NEST 🛒</h1>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="cursor-pointer hover:text-blue-600">
            Home
          </Link>
        </li>

        <li>
          <Link to="/productpage" className="cursor-pointer hover:text-blue-600">
            Shop
          </Link>
        </li>

        <li className="relative">
          <Link to="/cart" className="cursor-pointer hover:text-blue-600">
            Cart
          </Link>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </li>

        <li className="relative">
          <Link to="/wishlist" className="cursor-pointer hover:text-blue-600">
            WishList
          </Link>
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-6 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};







export default Navbar
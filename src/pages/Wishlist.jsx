

import { useContext } from "react";
import Navbar from "../components/Navbar";
import CartContext from "../Context/CartContext";

const Wishlist = () => {
  const { wishlist, clearWishlist } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty 😕</p>
        ) : (
          <>
            <ul className="space-y-4">
              {wishlist.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-blue-600 font-bold">${item.price}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={clearWishlist}  // agar clear wishlist alag karna chahte ho to function alag banao context me
              className="mt-6 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
            >
              Clear Wishlist
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Wishlist;

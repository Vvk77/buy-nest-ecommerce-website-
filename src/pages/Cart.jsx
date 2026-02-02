import { useContext } from "react";
import Navbar from "../components/Navbar";
import CartContext from "../Context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 mb-4 p-4 bg-white rounded shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p>
                    Price: ${product.price} × {product.quantity} = $
                    {(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    -
                  </button>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-6 font-bold text-xl">
              Total Price: ${totalPrice.toFixed(2)}
            </div>

            <div className="text-right mt-4">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

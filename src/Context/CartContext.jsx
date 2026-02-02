import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

 const clearCart = () => {
    setCart([]);
  };

  // Clear wishlist only
  const clearWishlist = () => {
    setWishlist([]);
  };

  const addToCart = (product) => {
  // Check karo ki product pehle se cart me hai ya nahi
  const exist = cart.find((p) => p.id === product.id);
  if (exist) {
    // Agar hai, quantity badhao
    setCart(
      cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  } else {
    // Nahi to naya product add karo with quantity 1
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const increaseQuantity = (productId) => {
  setCart(
    cart.map((p) =>
      p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
    )
  );
};

const decreaseQuantity = (productId) => {
  const product = cart.find((p) => p.id === productId);
  if (product) {
    if (product.quantity === 1) {
      // Quantity 1 hai, to product remove kar do
      setCart(cart.filter((p) => p.id !== productId));
    } else {
      // Quantity 1 se zyada hai, quantity ghatado
      setCart(
        cart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  }
};




  

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        clearCart,
        clearWishlist,
        increaseQuantity,
        decreaseQuantity

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

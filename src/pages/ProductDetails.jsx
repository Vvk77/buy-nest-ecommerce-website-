import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import CartContext from "../Context/CartContext";


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productId]);

  if (loading) {
    return (
      <>
        <Navbar />
        <p className="text-center py-10 text-gray-500">Loading product...</p>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <p className="text-center py-10 text-red-500">Product not found!</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex justify-center items-center bg-white p-6 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 object-contain"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold mb-6 text-gray-800">{product.title}</h1>
              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 mb-8">${product.price}</p>
              <div className="flex gap-4">
                <button onClick={() => addToCart(product)} className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
                <button  onClick={() => addToWishlist(product)} className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-100 transition">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

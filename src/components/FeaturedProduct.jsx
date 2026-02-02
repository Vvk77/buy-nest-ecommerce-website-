import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";  

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            to={`/product/${product.id}`}  
            key={product.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-4"
            />
            <h3 className="font-semibold text-lg line-clamp-2">{product.title}</h3>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
            <button 
              onClick={(e) => {
                e.preventDefault();  
                addToCart(product);  
              }}  
              className="mt-auto w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;

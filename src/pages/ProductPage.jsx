import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CartContext from "../Context/CartContext";

const ProductPage = () => {
  const { categoryName } = useParams();
  const { addToCart, addToWishlist } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const url = categoryName
      ? `https://fakestoreapi.com/products/category/${categoryName}`
      : "https://fakestoreapi.com/products";

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setOriginalProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categoryName]);

  if (loading) {
    return (
      <>
        <Navbar />
        <p className="text-center py-10 text-gray-500">Loading products...</p>
      </>
    );
  }

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "") {
    filteredProducts = originalProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 max-w-7xl mx-auto px-6">
    
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/2 bg-gray-100 p-2 rounded-xl shadow-sm">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-gray-100 px-4 py-2 rounded-xl outline-none"
          >
            <option value="">All (Default)</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>

        {/* Products grid */}
        <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4">
          {filteredProducts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No products found 😕
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-52 w-full object-contain mb-5"
                  />
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-blue-600 font-bold text-xl mb-4">
                    ${product.price}
                  </p>
                </Link>

                <div className="mt-auto flex gap-3">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => addToWishlist(product)}
                    className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default ProductPage;

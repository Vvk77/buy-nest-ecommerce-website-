

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Csata", data)
        setCategories(data);
        setLoading(false);
     
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading categories...</p>;
  }

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Shop by Category
      </h2>

      <div className="grid gap-6 px-6 max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/productpage/${category}`}
            className="cursor-pointer rounded-xl border p-6 text-center capitalize shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{category}</h3>
          </Link>
        ))}
      </div>
     
    </section>
  );
};

export default Categories;

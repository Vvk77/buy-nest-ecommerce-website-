import { useEffect, useState } from "react";
import { heroImages } from "../constants/Heroimage";
import { Link } from "react-router-dom";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-[75vh] overflow-hidden">

      <img
        src={heroImages[current]}
        alt="hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-start pl-6 md:pl-20">
        <div className="bg-white text-black p-8 rounded-xl max-w-md shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Shop Smart
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Shop Better
          </h2>
          <p className="text-lg mb-6">
            Best Deals on Top Products
          </p>
        <Link
  to="/productpage"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block text-center"
>
  Shop Now
</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

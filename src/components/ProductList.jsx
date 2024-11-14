import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setError("Faild to fetch products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductList;

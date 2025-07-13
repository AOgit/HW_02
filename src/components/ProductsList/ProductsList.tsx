import { useEffect, useState } from "react";
import type { Product } from "../../types";
import { Link } from "react-router-dom";
// common

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const productRes = await res.json();
    setProducts(productRes);
  }

  return (
    <div>
      <h2>ProductsList</h2>
      <ul>
        {products.map((p)=>(
            <li key={"user_" + p.id}>
              <h3>{p.title}</h3>
              <img src={p.images[0]} alt="Product" />
              <span>{p.price}</span>
              <Link to={`/products/${p.id}`}>To product</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

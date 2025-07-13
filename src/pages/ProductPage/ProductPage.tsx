import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../types";

export default function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState<Product|undefined>(undefined);
    
    async function fetchProduct(id: string|undefined) {
       const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`) 
        const obj = await res.json();
        setProduct(obj);
    }

    useEffect(() => {
        fetchProduct(id);
    }, [id])

  return (
    <div>ProductPage: {product?.title}</div>
  )
}

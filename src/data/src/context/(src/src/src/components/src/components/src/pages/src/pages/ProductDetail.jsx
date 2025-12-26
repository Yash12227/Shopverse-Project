import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id == id);
  const { dispatch } = useContext(StoreContext);

  return (
    <div className="detail">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
}

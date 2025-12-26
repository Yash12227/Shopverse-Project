import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { state, dispatch } = useContext(StoreContext);

  const total = state.cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {state.cart.map(item => (
        <div key={item.id}>
          {item.title} - ₹{item.price}
          <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

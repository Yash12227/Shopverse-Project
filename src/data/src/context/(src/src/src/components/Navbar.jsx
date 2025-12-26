import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Navbar() {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <nav className="navbar">
      <Link to="/">Amazon Clone</Link>
      <div>
        <Link to="/cart">Cart ({state.cart.length})</Link>
        {state.user ? (
          <span onClick={() => dispatch({ type: "LOGOUT" })}>
            Hi, {state.user.name}
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

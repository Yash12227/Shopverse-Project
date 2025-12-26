import { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const { dispatch } = useContext(StoreContext);
  const navigate = useNavigate();

  const login = () => {
    dispatch({ type: "LOGIN", payload: { name } });
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={e => setName(e.target.value)} placeholder="Name" />
      <button onClick={login}>Login</button>
    </div>
  );
}

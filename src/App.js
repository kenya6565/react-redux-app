import { useSelector } from "react-redux";
import "./App.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;

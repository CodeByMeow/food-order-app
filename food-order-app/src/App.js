import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { HomePage, Checkout } from "./pages";
import { useState } from "react";
import CartContext from "./contexts/CartContext";
function App() {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });
  const isProductExist = (id) => {
    return cart.items.findIndex((item) => id === item.id);
  };
  const calcTotal = (items) =>
    items.reduce((sum, item) => {
      sum += item.price * item.amount;
      return Math.floor(sum * 100) / 100;
    }, 0);
  const addToCart = (product, amount = 1) => {
    const { items } = cart;
    const item = { ...product, amount: amount };
    const index = isProductExist(product.id);
    if (index !== -1) {
      items[index].amount += amount;
    } else {
      items.push(item);
    }
    const total = calcTotal(items);
    setCart({ ...cart, items, total });
  };
  const updateItemCart = (id, amount) => {
    if (cart.items.length === 0) {
      setCart({});
      return;
    }
    const index = isProductExist(id);
    let { items } = cart;
    if (index === -1) return;
    items[index].amount += amount;
    if (items[index].amount <= 0) {
      items = items.filter((_, currentIndex) => currentIndex !== index);
    }
    const total = calcTotal(items);
    setCart({ ...cart, items: items, total });
  };

  return (
    <CartContext.Provider value={{ cart, updateItemCart }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;

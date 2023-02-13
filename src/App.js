import "./App.css";
import Categories from "./components/categories/Categories";
import DetailView from "./components/detailView/DetailView";
import OrderSuccessfull from "./components/orderSuccessfull/OrderSuccessfull";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/detailView" element={<DetailView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderSuccessfull />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

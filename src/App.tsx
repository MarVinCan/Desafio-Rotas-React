import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeHeader from "./routes/HomeHeader";
import Home from "./routes/HomeHeader/Home";
import Products from "./routes/HomeHeader/Products";
import About from "./routes/HomeHeader/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHeader />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />}>
          </Route>
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

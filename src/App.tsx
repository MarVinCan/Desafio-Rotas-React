import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeHeader from "./routes/HomeHeader";
import Home from "./routes/HomeHeader/Home";
import Products from "./routes/HomeHeader/Products";
import About from "./routes/HomeHeader/About";
import Computers from "./routes/HomeHeader/Products/Computers";
import Eletronics from "./routes/HomeHeader/Products/Eletronics";
import Books from "./routes/HomeHeader/Products/Books";
import NotFound from "./routes/HomeHeader/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHeader />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Navigate to="computers" />} />
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

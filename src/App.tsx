import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeHeader from "./routes/HomeHeader";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHeader/>} >
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

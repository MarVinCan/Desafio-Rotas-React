import { Outlet } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";

export default function Products() {
  return (
    <>
      <div className="container mt20">
        <div>
          <ProductCard />
        </div>
      </div>
      <Outlet/>
    </>
  );
}

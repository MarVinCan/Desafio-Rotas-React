import "./styles.css";
import { NavLink } from "react-router-dom";
import homeImg from "../../assets/home-img.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container navbar">
        <div className="left-navbar">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-item item-actv" : "navbar-item"
            }
            to="/home"
          >
            Início
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-item item-actv" : "navbar-item"
            }
            to="/"
          >
            Produtos
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-item item-actv" : "navbar-item"
            }
            to="/"
          >
            Sobre nós
          </NavLink>
        </div>
        <div>
            <Link to="/"><img src={homeImg} alt="home" /></Link>
        </div>
      </div>
    </header>
  );
}

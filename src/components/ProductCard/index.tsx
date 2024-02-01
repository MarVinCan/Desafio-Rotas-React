import { NavLink } from 'react-router-dom';
import './styles.css';

export default function ProductCard(){
    return(
        <>
            <div className='product-card'>
                <NavLink className={({ isActive }) =>
              isActive ? "card-item item-actv" : "card-item"
            } to={"/products/computers"}>Computadores</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "card-item item-actv" : "card-item"
            } to={"/products/eletronics"}>Eletrônicos</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "card-item item-actv" : "card-item"
            } to={"/products/books"}>Livros</NavLink>
            </div>
        </>
    );
}
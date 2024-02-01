import { NavLink } from 'react-router-dom';
import './styles.css';

export default function ProductCard(){
    return(
        <>
            <div className='product-card'>
                <NavLink className={({ isActive }) =>
              isActive ? "card-item item-actv" : "card-item"
            } to={"/computer"}>Computadores</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "card-item item-actv" : "card-item"
            } to={"/eletronics"}>Eletrônicos</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "card-item item-actv" : "card-item"
            } to={"/books"}>Livros</NavLink>
            </div>
        </>
    );
}
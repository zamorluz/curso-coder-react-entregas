import { useEffect, useState } from "react";
import Logo from "../../assets/react.svg";
import CartWidget from "../cart/Widget.jsx";
import CartContent from "../cart/Content.jsx";
import { getProductCategories } from "../../mocks/asyncService.jsx";
import { NavLink } from "react-router-dom";
const Public = ({
    cart, setCart
}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        getProductCategories(3)
            .then(response => {
                setCategories(response);
            })
            .catch(error => {
                console.log(error);
            })
    },[]);
    useEffect(()=>{
        if(subMenuIsOpen){
            document.getElementById('main-menu-submenu').classList.remove('d-none');
        }else{
            document.getElementById('main-menu-submenu').classList.add('d-none');
        }
    },[subMenuIsOpen]);
    return (
    <>
        <nav id="main-menu-bar" className="position-fixed top-0 start-0 w-100 text-black shadow-sm z-2 bg-white">
            <div className="container position-relative">
                <NavLink to="/" id="main-menu-logo">
                    <img src={Logo}></img>
                </NavLink>
                <div className="d-inline-block p-3" id="main-menu-bar-links">
                    <NavLink className="p-3 text-decoration-none"to="/">Home</NavLink>
                    <NavLink className="p-3 text-decoration-none"to="/products">Productos</NavLink>
                    <NavLink className="p-3 text-decoration-none"to="/cart">Cart</NavLink>
                    <NavLink className="p-3 text-decoration-none" onClick={() => setSubMenuIsOpen(!subMenuIsOpen)}>Categorias</NavLink>
                </div>
                <div id="main-menu-bar-buttons" className="position-absolute top-0 end-0 h-100">
                    <CartWidget onClick={() => setMenuIsOpen(!menuIsOpen)} className="vertical-middle"/>
                </div>
            </div>
            <div className="text-center container" id="main-menu-submenu">
                {categories.map(category => <NavLink key={category} to={`/categories/${category}`} className="p-3">{category}</NavLink>)}
            </div>
        </nav>
        <CartContent cart={cart} setCart={(cart) => setCart(cart)} isOpen={menuIsOpen} closeCart={() => setMenuIsOpen(!menuIsOpen)}/>
    </>
    );
}
export default Public;
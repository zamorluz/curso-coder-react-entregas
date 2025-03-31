import { useState } from "react";
import Logo from "../../assets/react.svg";
import CartWidget from "../cart/Widget.jsx";
import CartContent from "../cart/Content.jsx";
const Public = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
    <>
        <nav id="main-menu-bar" className="position-fixed top-0 start-0 w-100 text-black p-3 shadow-sm z-2 bg-white">
            <div className="container position-relative">
                <a href="http://localhost:5173" id="main-menu-logo">
                    <img src={Logo}></img>
                </a>
                <div class="d-inline-block p-3" id="main-menu-bar-links">
                    <a href="#" class="p-3">Home</a>
                    <a href="#" class="p-3">Cart</a>
                </div>
                <div id="main-menu-bar-buttons" className="position-absolute top-0 end-0">
                    <CartWidget onClick={() => setMenuIsOpen(!menuIsOpen)}/>
                </div>
            </div>
        </nav>
        <CartContent isOpen={menuIsOpen} closeCart={() => setMenuIsOpen(!menuIsOpen)}/>
    </>
    );
}
export default Public;
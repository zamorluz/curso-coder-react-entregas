import { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

import { CartContext } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";
import { _store } from "../services/storeService";

const ItemCount = ({ product, forceCounterRender = false }) => {
    const { cart, addToCart, deleteFromCart , existsInCartByProduct, getItem } = useContext(CartContext);
    const [renderable, setRenderable] = useState(true);
    const add = () => {
        let item = getItem(product),
            qty = item.qty + 1;
        qty = qty < 0 ? 0 : qty;
        qty = qty > product.stock ? product.stock : qty;
        addToCart(product, qty);
    };

    const sub = () => {
        let item = getItem(product),
            qty = item.qty - 1;
        qty = qty < 0 ? 0 : qty;
        qty = qty > product.stock ? product.stock : qty;
        addToCart(product, qty);
    };

    const cartAdd = () => {
        setRenderable(false);
    };

    const cartDelete = () => {
        deleteFromCart(product.id);
    };



    return (renderable || forceCounterRender ? 
        <div>
            <button onClick={sub}>-</button>
            <span>{cart.filter(item => item.id === product.id).map(item => item.qty).reduce((a,b) => a + b, 0)}</span>
            <button onClick={add}>+</button>
            <button onClick={cartAdd}>Agregar al carrito</button>
            {existsInCartByProduct(product) && getItem(product).qty > 0 ? 
            <button onClick={cartDelete}>
                <FaTrashAlt />
            </button> : ''}
        </div> : <div>
            <NavLink to="/cart" className="btn btn-primary">
            Ir al carrito</NavLink>
        </div>
    );
};

export default ItemCount;
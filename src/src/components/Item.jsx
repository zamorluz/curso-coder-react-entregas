import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Item = ({
    product,
    forceCounterRender = false,
    outerClass = "",
    innerClass = "",
    id = "items-container",
    hideLink = false
}) => {
    const {title, price, stock} = product;
    const {cart} = useContext(CartContext);
    const product_url = `/products/${product.id}`;
    return(
        <div  className={outerClass} id={id}>
            <div className={innerClass}>
                <h5>{title}</h5>
                <h5>Price: {price}</h5>
                <h5>Stock: {stock}</h5>
                {hideLink ? null : <NavLink to={product_url}>Ver mas</NavLink>}
                {
                    typeof cart[product.id] !== typeof undefined && cart[product.id].qty > 0 
                    ? <h4>En el carrito {cart[product.id].qty}</h4> 
                    : ""
                }
                <ItemCount product={product} forceCounterRender={forceCounterRender}/>
            </div>
        </div>
    );
}
export default Item;
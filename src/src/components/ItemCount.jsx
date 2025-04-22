import {useEffect, useState} from "react";

/**
 * This kinda works, but does not persist in all the app the right way
 * i guess i need to use context, but i will wait until that class
 * @param {cart,setCart,product} param0 
 * @returns 
 */
const ItemCount = ({cart = {}, setCart, product}) => {
    const [count, setCount] = useState(typeof cart[product.id] !== typeof undefined ? cart[product.id].qty : 0);
    const add = () => {
        if(count < product.stock){
            setCount(count + 1);
        }
    }
    const sub = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }
    /**
     * @todo stopping trying this until context class, im done trying to sync the cart
     * NOTE: i could use local storage, but where is the challenge in that?
     */
    const addToCart = () => {
        if(count > 0){
            if (typeof cart[product.id] ===  typeof undefined){
                cart[product.id] = product;
            }
            cart[product.id].qty = count;
            if(cart[product.id].qty > product.stock){
                cart[product.id].qty = product.stock;
            }
            setCart(cart);
        }
    }
    useEffect(()=>{
        if (typeof cart[product.id] ===  typeof undefined){
            return;
        }
        if(cart[product.id].qty > product.stock){
            cart[product.id].qty = product.stock;
        }
        setCount(cart[product.id].qty);

    },[product, cart])
    return(
        <div>
            <button onClick={sub}>-</button>
            <span>{count}</span>
            <button onClick={add}>+</button>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
}
export default ItemCount;
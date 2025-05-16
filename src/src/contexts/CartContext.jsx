import { createContext, useState } from "react";
import { _store } from "../services/storeService";
import { createRow, editRow } from "../services/firebaseService";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const USE_LOCAL_STORAGE = true;
    const VERBOSE = true;
    const DEFAULT_CART = [];
    /**
     * @var {array} cart
     */
    const [cart, setCart] = useState(USE_LOCAL_STORAGE && _store('cart') !== null ? _store('cart') : DEFAULT_CART);

    const cartConsole = (variable, force = false) => {
        if(VERBOSE || force){
            console.log(variable);
        }
    }
    const firestoreCartID = async () => {
        if(_store('firestore_cart_id') === null){
            const firestoreCart = await createRow('carts', {items: []})
            _store('firestore_cart_id', firestoreCart.id);
            cartConsole({
                function : "firestoreCartID", 
                step: "created", 
                message: "cart created in firestore. ID: " + _store('firestore_cart_id'),
                firestoreCart,
                cart,
            });
        }
        return _store('firestore_cart_id');
    }
    const cartToFirestore = () => firestoreCartID()
        .then(firestore_cart_id => {
            const items = cart.filter(item => item.qty > 0).map(item => {
                return {
                    product_id : item.id,
                    qty : item.qty
                }
            });
            cartConsole({
                function : "cartToFirestore", 
                step: "init", 
                firestore_cart_id,
                cart, items
            });
            editRow('carts', firestore_cart_id, {items})
        });
    const cartToStore = () => {
        if (USE_LOCAL_STORAGE){
            _store("cart", cart);
            cartConsole({
                function : "cartToStore", 
                step: "done", 
                message: "set cart to storage",
                cart
            });
        }else{
            cartConsole({
                function : "cartToStore", 
                step: "skipped", 
                message: "local storage disabled",
                cart
            });
        }
    }
    const getItem = (product) => {
        if (!existsInCartByProduct(product)) {
            cartConsole({
                function : "getItem", 
                step: "check", 
                message: "product not in cart",
                product
            });
            addToCart(product, 0); 
        }
        return cart.find(item => item.id === product.id);
    };

    const addToCart = (item, qty) => {
        cartConsole({
            function : "addToCart", 
            step: "init",  
            item, qty
        });
        qty = qty > item.stock ? item.stock : qty;
        qty = qty < 0 ? 0 : qty;
        if (typeof item === typeof undefined || item === null || typeof item.id === typeof undefined) {
            cartConsole({
                function : "addToCart", 
                step: "checks", 
                message: "item is undefined or null",
                item, qty
            });
            return cart;
        }
        if (!existsInCartByProduct(item)) {
            cart.push(item);
            cartConsole({
                function : "addToCart", 
                step: "checks", 
                message: "inserting default item",
                cart
            });
        }
        item = getItem(item);
        const index = getCartIndexByProduct(item);
        cart[index].qty = qty;
        setCart(cart);
        cartConsole({
            function : "addToCart", 
            step: "added", 
            message: "qty updated",
            item: cart[index],
            qty, 
            cart
        });
        cartToStore();
        cartToFirestore();
        return cart;
    };

    const clearCart = () => {
        setCart(DEFAULT_CART);
        cartConsole({
            function : "clearCart", 
            step: "done", 
            cart
        });
        cartToStore();
        cartToFirestore();
    }
    const deleteFromCart = (product_id) => {
        if (!existsInCartByProductID(product_id)) {
            cartConsole({
                function : "deleteFromCart", 
                step: "check", 
                message: "product not in cart",
                product_id,
                cart
            });
            return cart;
        }
        setCart(cart.filter((item) => item.id !== product_id));
        cartConsole({
            function : "deleteFromCart", 
            step: "done", 
            message: "deleted from cart",
            product_id,
            cart
        });
        cartToStore();
        cartToFirestore();
        return cart;
    };

    const getCartIndexByProduct = (product) => {
        return cart.findIndex((item) => item.id === product.id);
    };

    const getCartIndexByProductID = (product_id) => {
        return cart.findIndex((item) => item.id === product_id);
    };

    const existsInCartByProductID = (product_id) => {
        return getCartIndexByProductID(product_id) >= 0;
    };

    const existsInCartByProduct = (product) => {
        return getCartIndexByProduct(product) >= 0;
    };


    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, deleteFromCart, existsInCartByProductID, getCartIndexByProductID, getCartIndexByProduct, existsInCartByProduct, cartConsole, getItem}}>
            {children}
        </CartContext.Provider>
    )
}
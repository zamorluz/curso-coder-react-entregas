import { RiCloseLargeLine } from "react-icons/ri";
import ItemList from "../ItemList";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartTotals from "./Totals";

const CartContent = ({
    isOpen,
    closeCart
}) => {
    const {cart} = useContext(CartContext)
    const closeCartOnClick = (e) => e.target.querySelector('#cart-content') !== null && e.clientX < e.target.querySelector('#cart-content').getBoundingClientRect().left ? closeCart() : false;
    return(
        <div className={isOpen ? 'position-fixed top-0 start-0 w-100 h-100 z-3' : 'd-none position-fixed top-0 start-0 w-100 h-100 z-3'} id="cart-holder" onClick={closeCartOnClick}>
            <div className="w-25 h-100 position-absolute top-0 end-0 w-25 bg-white" id="cart-content">
                <div className="row bg-black text-white m-0">
                    <div className="col-10">
                        <h3 className="m-0 p-3">Cart Content</h3>
                    </div>
                    <div className="col-2 p-0" role="button" onClick={closeCart}>
                        <div className="vertical-middle text-center">
                        <RiCloseLargeLine />
                        </div>
                    </div>
                </div>
                {cart.length === 0 
                ? <div className="text-center p-3">
                    No hay productos en el carrito
                </div> 
                : <>
                    <ItemList hideLink="true" items={cart.filter(element => element.qty > 0)} outerClass="col-12" forceCounterRender={true}/>
                    <CartTotals/>
                </>
                }
                
            </div>
        </div>
    );
}
export default CartContent;
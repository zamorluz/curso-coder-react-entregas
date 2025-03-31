import { RiCloseLargeLine } from "react-icons/ri";

const CartContent = ({
    isOpen,
    closeCart
}) => {
    return(
        <div className={isOpen ? 'position-fixed top-0 start-0 w-100 h-100 z-3' : 'd-none position-fixed top-0 start-0 w-100 h-100 z-3'} id="cart-holder">
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
            </div>
        </div>
    );
}
export default CartContent;
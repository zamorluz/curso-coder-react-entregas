import {default as Menu} from "../headers/Public";
import {default as Footer} from "../footers/Public";
const Public = ({
    cart,
    setCart,
    children
}) => {
    return (
        <>
        <Menu cart={cart} setCart={(cart)=> setCart(cart)}/>
        <main className='w-100 position-relative'>
            {children}
        </main>
        <Footer/>
        </>
    )
};
export default Public;
import {default as Layout} from "../../layouts/Public";
import {default as Error} from "../../errors/Error404";

const Error404 = ({
    cart, setCart
}) => {
    return (
        <Layout cart={cart} setCart={(cart) => setCart(cart)}>
            <Error/>
        </Layout>
    )
}
export default Error404;
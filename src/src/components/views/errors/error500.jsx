import {default as Layout} from "../../layouts/Public";

const Error500 = ({cart, setCart}) => {
    return (
        <Layout cart={cart} setCart={(cart) => setCart(cart)}>
            <Error404/>
        </Layout>
    )
}
export default Error500;
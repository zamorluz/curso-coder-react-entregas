import { useParams } from "react-router-dom";
import ItemsContainer from "../../../ItemsContainer";
import {default as Layout} from "../../../layouts/Public";

const List = ({
    greeting = "Productos",
    cart, 
    setCart
      
}) => {
    const {category_id} = useParams()
    return (
        <Layout cart={cart} setCart={(cart) => setCart(cart)}>
            <ItemsContainer cart={cart} setCart={(cart) => setCart(cart)} id="items-container" className="my-3" greeting={`${greeting}${category_id ? `: ${category_id}`  : ''}`}/>
        </Layout>
    )
}
export default List;
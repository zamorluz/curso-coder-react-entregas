import { useParams } from "react-router-dom";
import ItemsContainer from "../../../ItemsContainer";
import {default as Layout} from "../../../layouts/Public";

const List = ({greeting = "Productos"}) => {
    const {category_id} = useParams()
    return (
        <Layout>
            <ItemsContainer id="items-container" className="my-3" greeting={`${greeting}${category_id ? `: ${category_id}`  : ''}`}/>
        </Layout>
    )
}
export default List;
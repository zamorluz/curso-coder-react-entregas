import { getProducts } from "../mocks/asyncService";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Error404 from "./errors/error404";
import Error500 from "./errors/error500";
import {default as Loader} from "./loaders/full";
const ItemsContainer = ({
    greeting = "Productos",
    id = "items-container",
    className = ""
}) => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(false);
    const [errors, setErrors] = useState(false);
    const {category_id} = useParams();
    useEffect(() => {
        setLoader(true);
        getProducts(false, 500)
            .then(response => {
                const products = !category_id ? response : response.filter(product => product.category == category_id);
                setItems(products);
                if(category_id && products.length == 0){
                    setErrors(<Error404/>)
                }
            })
            .catch(error => {
                console.log(error);
                setErrors(<Error500/>)
            }).finally(()=> {
                setLoader(false);
            })
    },[category_id]);
    className += " container"
    return(loader ? <Loader/> : (errors ? errors :
        <div className={className} id={id}>
            <h3>{greeting}</h3>
            <div className="row">
                <ItemList items={items}/>
            </div>
        </div>
    ));
}
export default ItemsContainer;
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {default as Layout} from "../../../layouts/Public";
import { getProductDetail } from "../../../../mocks/asyncService";
import {default as Loader} from "../../../loaders/full";
import Error404 from "../../errors/error404";
import Error500 from "../../errors/error500";

const Detail = ({
    cart,
    setCart
}) => {
    const [errors, setErrors] = useState(false);
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(false);
    const {product_id} = useParams();
    useEffect(() => {
        setLoader(true);
        getProductDetail(product_id, false, 0)
            .then(response => {
                if(typeof response === typeof undefined){
                    setErrors(<Error404 cart={cart} setCart={cart=>setCart(cart)}/>);
                }
                setProduct(response);
            })
            .catch(error => {
                console.log(error);
                setErrors(<Error500 cart={cart} setCart={cart=>setCart(cart)}/>);
            })
            .finally(() => {
                setLoader(false);
            })
    },[product_id, cart, setCart]);
    return (
        errors 
        ? errors 
        : (
            loader 
            ? <Loader/> 
            : <Layout cart={cart} setCart={cart=>setCart(cart)}>   
                <div>
                    <div >
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                    </div>
                </div>
            </Layout>
        )
    )
}
export default Detail;
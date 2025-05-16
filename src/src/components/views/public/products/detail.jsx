import React, {useEffect, useState} from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {default as Layout} from "../../../layouts/Public";
import { getProductDetail } from "../../../../mocks/asyncService";
import {default as Loader} from "../../../loaders/full";
import Error404 from "../../errors/error404";
import Error500 from "../../errors/error500";
import ItemCount from "../../../ItemCount";

const Detail = () => {
    const [errors, setErrors] = useState(false);
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(false);
    const {product_id} = useParams();
    const [searchParams] = useSearchParams();
    const cc = searchParams.get('cc');
    useEffect(() => {
        setLoader(true);
        getProductDetail(product_id, cc )
            .then(response => {
                if(typeof response === typeof undefined){
                    setErrors(<Error404/>);
                }
                setProduct(response);
            })
            .catch(error => {
                console.log(error);
                setErrors(<Error500/>);
            })
            .finally(() => {
                setLoader(false);
            })
    },[product_id, cc]);
    return (
        errors 
        ? errors 
        : (
            loader 
            ? <Loader/> 
            : <Layout>   
                <div>
                    <div >
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                    </div>
                    <ItemCount product={product}/>
                </div>
            </Layout>
        )
    )
}
export default Detail;
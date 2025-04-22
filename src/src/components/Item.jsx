import ItemCount from "./ItemCount";

const Item = ({
    product,
    cart,
    setCart,
    outerClass = "",
    innerClass = "",
    id = "items-container",
    hideLink = false
}) => {
    const {title, price} = product;
    const product_url = `/products/${product.id}`;
    return(
        <div  className={outerClass} id={id}>
            <div className={innerClass}>
                <h5>{title}</h5>
                <h5>{price}</h5>
                {hideLink ? null : <a href={product_url}>Ver mas</a>}
                <ItemCount product={product} cart={cart} setCart={(cart)=>setCart(cart)}/>
            </div>
        </div>
    );
}
export default Item;
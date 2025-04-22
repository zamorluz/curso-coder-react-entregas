import Item from "./Item";

const ItemList = ({
    items,
    cart, setCart,
    hideLink = false,
    outerClass = "col-4",
    innerClass = "m-3 bg-black text-white p-3 m-3 rounded"
}) => {
    return(Object.values(items).map(product => (
            <Item hideLink={hideLink} key={product.id} cart={cart} setCart={(cart) => setCart(cart)} outerClass={outerClass} innerClass={innerClass} product={product}/>
        ))
    )
}
export default ItemList;
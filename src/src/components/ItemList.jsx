import Item from "./Item";

const ItemList = ({
    items,
    hideLink = false,
    forceCounterRender = false,
    outerClass = "col-4",
    innerClass = "m-3 bg-black text-white p-3 m-3 rounded"
}) => {
    return(Object.values(items).map(product => (
            <Item hideLink={hideLink} key={product.id}  outerClass={outerClass} innerClass={innerClass} product={product} forceCounterRender={forceCounterRender}/>
        ))
    )
}
export default ItemList;
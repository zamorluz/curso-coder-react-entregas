
const Item = ({
    title,
    price,
    outerClass = "",
    innerClass = "",
    id = "items-container"
}) => {
    return(
        <div  className={outerClass} id={id}>
            <div className={innerClass}>
                <h5>{title}</h5>
                <h5>{price}</h5>
            </div>
        </div>
    );
}
export default Item;
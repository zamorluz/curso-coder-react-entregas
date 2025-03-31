
const ItemsContainer = ({
    children,
    id = "items-container",
    className = ""
}) => {
    className += " container"
    return(
        <div className={className} id={id}>
            <div className="row">
                {children}
            </div>
        </div>
    );
}
export default ItemsContainer;
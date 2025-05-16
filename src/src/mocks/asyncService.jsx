
import { cachedTable, cachedRow } from "../services/firebaseService";
// lets cache everything because free plan
export const getProducts = () => cachedTable("products").then(response => response.filter(element => element.stock > 0));
export const getProductDetail = (id) => cachedRow("products", id);
export const getProductCategories = (amount = 3) => getProducts().then(products => products.slice(0,amount).map(product => product.category))

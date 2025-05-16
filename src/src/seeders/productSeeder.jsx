import { collection, getDocs, query, where } from "firebase/firestore";
import {createRow, db} from "../services/firebaseService";
const TABLE = 'products';
const INDEX = 'cod';
const ITEMS = [
    {
        cod: 'A001',
        title: 'Producto 1',
        price: 100,
        stock: 10,
        description: 'Descripcion del producto 1',
        category: 'Categoria 1',
        img: 'https://via.placeholder.com/150'
    },
    {
        cod: 'A002',
        title: 'Producto 2',
        price: 200,
        stock: 20,
        description: 'Descripcion del producto 2',
        category: 'Categoria 2',
        img: 'https://via.placeholder.com/150'
    },
    {
        cod: 'A003',
        title: 'Producto 3',
        price: 300,
        stock: 30,
        description: 'Descripcion del producto 3',
        category: 'Categoria 3',
        img: 'https://via.placeholder.com/150'
    }
];
const collectionRef = collection(db, TABLE);
const run = () => {
    ITEMS.forEach(async item => {
        const queryRef = query(collectionRef,where(INDEX,'==',item[INDEX]));
        const querySnapshot = await getDocs(queryRef);
        if(querySnapshot.docs.length > 0){
            console.log(`already exists ${TABLE} ${querySnapshot.docs[0].id}`); 
            return;
        }
        const doc = await createRow(TABLE, item)
        if(doc.id){
            console.log(`Created ${TABLE} ${doc.id}`); 
        }
    });
}
export default run;
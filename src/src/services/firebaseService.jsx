// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { _store } from "./storeService";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbSF-wYyw2KbauXcoQDnKGhq5DoHcFSXc",
  authDomain: "zamorluz-react.firebaseapp.com",
  projectId: "zamorluz-react",
  storageBucket: "zamorluz-react.firebasestorage.app",
  messagingSenderId: "811811412755",
  appId: "1:811811412755:web:3c62a34c26caa52d5c98e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const CACHE_DEBUG = true;


export const clearCacheTable = (table) => localStorage.removeItem(`firestore-table-${table}`);
export const clearCacheTableRow = (table, id) => localStorage.removeItem(`firestore-table-${table}-row-${id}`);

export const table = (table) => getDocs(collection(db,table))
    .then(response => {
        response = response.docs.map(doc => {
            return {
                id : doc.id,
                ...doc.data()
            }
        });
        return response
    });
export const cachedTable = (tableName, refreshCache = false) => {
    const cache_key = `firestore-table-${tableName}`;
    if(CACHE_DEBUG && refreshCache){
        console.log(`Refreshing: ${cache_key}`);
    }
    refreshCache = refreshCache || _store(cache_key) === null
    if(!refreshCache){
        return new Promise((resolve) => {
            resolve(_store(cache_key));
        })
    }
    return table(tableName)
        .then(response => {
            _store(cache_key, response);
            return response;
        });
}
export const row = (table, id) => getDoc(doc(db, table, id))
    .then(response => {
        return {
            id : response.id,
            ...response.data()
        }
    });

export const cachedRow = (tableName, id, refreshCache = false) => {
    const cache_key = `firestore-table-${tableName}-row-${id}`;
    if(CACHE_DEBUG && refreshCache){
        console.log(`Refreshing: ${cache_key}`);
    }
    refreshCache = refreshCache || _store(cache_key) === null
    if(!refreshCache){
        return new Promise((resolve) => {
            resolve(_store(cache_key));
        })
    }
    return row(tableName, id)
        .then(response => _store(cache_key, response));
}

export const createRow = (table, data) => addDoc(collection(db, table), data);
export const editRow = (table, id, data) => updateDoc(doc(db, table, id), data);


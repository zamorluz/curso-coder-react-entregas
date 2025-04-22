const products = [
    {
        id: 'ITEM-001',
        title: 'Item 1',
        price: 100,
        stock: 10,
        category: 'category-001',
        img : "default.jpg"
    },{
        id: 'ITEM-002',
        title: 'Item 2',
        price: 200,
        stock: 20,
        category: 'category-002',
        img : "default.jpg"
    },{
        id: 'ITEM-003',
        title: 'Item 3',
        price: 100,
        stock: 10,
        category: 'category-003',
        img : "default.jpg"
    },{
        id: 'ITEM-004',
        title: 'Item 4',
        price: 200,
        stock: 20,
        category: 'category-004',
        img : "default.jpg"
    }
];
export const getProducts = (error = false, timeout = 500) => new Promise((resolve,reject) => {
    setTimeout(() => {
        if(!error){
            resolve(products);
        }else{
            reject("error no hay data");
        }
    }, timeout)
});
export const getProductDetail = (id, error = false, timeout = 500) => new Promise((resolve,reject) => {
    setTimeout(() => {
        if(!error){
            resolve(products.find(element => element.id === id));
        }else{
            reject("error no hay data");
        }
    }, timeout)
});
export const getProductCategories = (amount = 3, error = false, timeout = 500) => new Promise((resolve,reject) => {
    setTimeout(() => {
        if(!error){
            resolve(products.slice(0,amount).map(product => product.category));
        }else{
            reject("error no hay data");
        }
    }, timeout)
});

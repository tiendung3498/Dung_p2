const urlProduct = process.env.REACT_APP_PRODUCTS
const urlViewed = process.env.REACT_APP_VIEWEDS
export const fetchProduct = (sort) =>{
    return async dispatch =>{
            let string =urlProduct;
            try {
                const request = string;
                const response = await fetch(request);
                const responseJson = await response.json();
                dispatch( showListProduct(responseJson,sort) )   
            }
             catch (error) {
                alert('Error: '+error.message);               
            }
    }        
}
export const fetchViewed = () =>{
    return async dispatch =>{
            let string =urlViewed;
            try {
                const request = string;
                const response = await fetch(request);
                const responseJson = await response.json();
                dispatch( showListViewed(responseJson) )   
            }
             catch (error) {
                alert('Error: '+error.message);               
            }
    }        
}
export const showListProduct = (listProduct,sort) => {
    return {
        type: 'showListProduct',
        listProduct,
        sort
    }
}
export const showListViewed = listViewed => {
    return {
        type: 'showListViewed',
        listViewed,
    }
}
export const addItemViewed = item => {
    return {
        type: 'addItemViewed',
        item,
    }
}
export const changeSort = value => {
    return {
        type: 'changeSort',
        value,
    }
}
export const changeRendirectProduct = value => {
    return {
        type: 'changeRendirect',
        value,
    }
}
export const updateProduct = (id,item) => {
    return {
        type: 'updateProduct',
        id,
        item
    }
}
export const changeStatusProduct = (item) => {
    return {
        type: 'changeStatusProduct',
        item
    }
}
export const addProduct = (item) => {
    return {
        type: 'addProduct',
        item
    }
}
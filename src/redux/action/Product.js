import Axios from 'axios'
const urlProduct = process.env.REACT_APP_PRODUCTS
const urlViewed = process.env.REACT_APP_VIEWEDS
export const fetchProduct = (sort) =>{
    return async dispatch =>{
            try {
                Axios.get(urlProduct)
                .then(res=>
                    dispatch( showListProduct(res.data,sort) ))   
            }
             catch (error) {
                alert('Error: '+error.message);               
            }
    }        
}
export const fetchViewed = () =>{
    return async dispatch =>{
            try {
                Axios.get(urlViewed)
                .then(res=>{
                    dispatch( showListViewed(res.data))             
                })
            }
             catch (error) {
                alert('Error: '+error.message);               
            }
    }        
}
export const fetchViewedUser = (id) =>{
    return async dispatch =>{
            try {
                Axios.get(urlViewed+"?idUser="+id)
                .then(res=>{
                    if(res.data[0]) dispatch(showListViewedUser(res.data[0].item))
                    else return
                })
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
export const showListViewedUser = listViewed => {
    return {
        type: 'showListViewedUser',
        listViewed,
    }
}
export const addItemViewed = (id,item) => {
    return {
        type: 'addItemViewed',
        id,
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
import Axios from 'axios'
const urlCart =process.env.REACT_APP_CARTS
const urlOrder =process.env.REACT_APP_ORDERS
export const fetchCart = () =>{
    return async dispatch =>{
            try {
                Axios.get(urlCart)
                .then(
                    response=>dispatch(showListCart(response.data)))
 
            } catch (error) {
                alert('Error: '+error.message);
                
            }
        }
             
}

export const fetchCartUser = (id) =>{
    return async dispatch =>{
            try {
                Axios.get(urlCart+"?idUser="+id)
                .then(
                    response=>{
                        if(response.data[0]) dispatch(showListCartUser(response.data[0].itemselected))
                        else return
                    })
 
            } catch (error) {
                alert('Error: '+error.message);
                
            }
        }
             
}
export const fetchOrder = (id) =>{
    return async dispatch =>{
            try {
                Axios.get(urlOrder+"?idUser="+id)
                .then(
                    response=>{
                        if(response.data[0]) dispatch(showListOrder(response.data))
                        else return
                    })
 
            } catch (error) {
                alert('Error: '+error.message);
                
            }
        }     
}
export const fetchItemOrder = (idOrder) =>{
    return async dispatch =>{
            try {
                Axios.get(urlOrder+"?idOrder="+idOrder)
                .then(
                    response=>{
                        if(response.data[0]) dispatch(showListItemOrder(response.data[0].item))
                        else return
                    })
 
            } catch (error) {
                alert('Error: '+error.message);
                
            }
        }
             
}

export const showListCart = listCart => {
    return {
        type: 'showListCart',
        listCart,     
    }
}

export const showListCartUser = listCart => {
    return {
        type: 'showListCartUser',
        listCart,     
    }
}
export const showListOrder = listOrder => {
    return {
        type: 'showListOrder',
        listOrder,     
    }
}
export const showListItemOrder = listOrder => {
    return {
        type: 'showListItemOrder',
        listOrder,     
    }
}
export const deleteItemCart = id => {
    return {
        type: 'deleteItemCart',
        id,     
    }
}
export const deleteCart = listCart => {
    return {
        type: 'deleteCart',
        listCart,     
    }
}
export const addToCart = (item,count) => {
    return {
        type: 'addToCart',
        item,
        count     
    }
}
export const addToOrder = (listItem,day) => {
    return {
        type: 'addToOrder',
        listItem,
        day  
    }
}
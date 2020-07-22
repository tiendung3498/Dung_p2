import Axios from 'axios'
const urlCart =process.env.REACT_APP_CARTS

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
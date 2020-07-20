export const fetchCart = () =>{
    const urlCart =process.env.REACT_APP_CARTS

    return async dispatch =>{
            let string =urlCart;
            try {
                const request = string;
                const response = await fetch(request);
                const responseJson = await response.json();
                dispatch( showListCart(responseJson) )   
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
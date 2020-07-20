const urlProduct = process.env.REACT_APP_PRODUCTS

export const fetchProduct = () =>{
    return async dispatch =>{
            let string =urlProduct;
            try {
                const request = string;
                const response = await fetch(request);
                const responseJson = await response.json();
                dispatch( showListProduct(responseJson) )   
            }
             catch (error) {
                alert('Error: '+error.message);               
            }
    }        
}
export const showListProduct = listProduct => {
    return {
        type: 'showListProduct',
        listProduct,
    }
}
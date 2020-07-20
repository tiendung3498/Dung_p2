const initState = {
    listProduct : []
}
const ProductReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'showListProduct':
            {
                return {
                    ...state,
                    listProduct: action.listProduct
                }
            }  
        
        default: 
           return {...state}
    }
}
export default ProductReducer
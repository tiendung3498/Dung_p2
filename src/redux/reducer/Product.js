import Axios from 'axios'
const initState = {
    listProduct : [],
    sort: '1',
    listViewed:[]
}
const urlViewed =process.env.REACT_APP_VIEWEDS

const sortProduct = (arr,sort)=>{
    if(sort == 2){
        return arr.sort((a,b)=> a.price -b.price)
    }
    if(sort==3){
        return arr.sort((a,b)=>{
            let nameA = a.name.toUpperCase(); 
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
              }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
        })
    }
    return [...arr]

}
const ProductReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'showListProduct':
            {
                return {
                    ...state,
                    listProduct: sortProduct(action.listProduct,action.sort),
                    sort:action.sort
                }
            } 
        case 'showListViewed':
            {
                return {
                    ...state,
                    listViewed: action.listViewed,
                }
            }
        case 'addItemViewed':
            let newViewed = [...state.listViewed]
            let findItem = newViewed.find(items=>items.id==action.item.id)
            if(findItem) return
            else{
                newViewed.push(action.item)
                Axios.post(urlViewed,action.item)
                if(newViewed.length>4){
                    Axios.delete(urlViewed+"/"+newViewed[0].id)
                    newViewed.shift()
                }
            }
            {
                return {
                    ...state,
                    listViewed: newViewed,
                }
            }  
        case 'changeSort':
            {
                return {
                    ...state,
                    sort: action.value
                }
            } 
        
        default: 
           return {...state}
    }
}
export default ProductReducer
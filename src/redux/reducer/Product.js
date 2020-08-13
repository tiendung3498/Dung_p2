import Axios from 'axios'
const initState = {
    listProduct : [],
    sort: '1',
    listViewed:[],
    listViewedUser:[],
    rendirect:1
}
const urlViewed =process.env.REACT_APP_VIEWEDS
const urlProduct =process.env.REACT_APP_PRODUCTS

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

const sortViewed=array=>{
    let temp1
    let temp2
    temp1 = array[0]
    array[0]=array[3]
    array[3]=temp1
    temp2=array[1]
    array[1]=array[2]
    array[2] =temp2               
    return [...array]
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
        case 'showListViewedUser':
            {
                return {
                    ...state,
                    listViewedUser: sortViewed(action.listViewed),
                }
            }
        case 'addItemViewed':
            let newViewed = [...state.listViewed] 
            let findUser = newViewed.find(items=>items.idUser==action.id)
            if(findUser){
                let findItem = findUser.item.find(items=>items.id==action.item.id)
                if(findItem) console.log('0')
                else{
                    findUser.item.push(action.item)
                    Axios.put(urlViewed+"/"+findUser.id,findUser)
                    if(findUser.item.length>4){
                        findUser.item.shift()
                        Axios.put(urlViewed+"/"+findUser.id,findUser)
                    }
                }
            }
            else{
                Axios.post(urlViewed,{idUser:action.id,item:[action.item]})
            }         
            {
                return {
                    ...state,
                    listViewedUser: findUser.item,
                }
            }  
        case 'changeSort':
            {
                return {
                    ...state,
                    sort: action.value
                }
            } 
        case 'changeRendirect':
            {
                return {
                    ...state,
                    rendirect: action.value
                }
            }
        case 'updateProduct':
            const newListProduct = [...state.listProduct]
            let findProduct = newListProduct.find(item=>item.id == action.id)
            if(findProduct) findProduct = action.item
            Axios.put(urlProduct+"/"+findProduct.id,action.item)
            {
                return{
                    ...state,
                    listProduct:newListProduct
                }
            }
        case 'changeStatusProduct':
            const newListProduct1 = [...state.listProduct]
            let index = newListProduct1.findIndex(item=>item.id==action.item.id)
            newListProduct1[index].status = !newListProduct1[index].status
            Axios.put(urlProduct+"/"+action.item.id,newListProduct1[index])
            return{
                ...state,
                listProduct:newListProduct1
            }
        case 'addProduct':
            const newListProduct2 = [...state.listProduct]
            newListProduct2.push(action.item)
            Axios.post(urlProduct,action.item)
            return{
                ...state,
                listProduct:newListProduct2
            }
                             
        default: 
           return {...state}
    }
}
export default ProductReducer
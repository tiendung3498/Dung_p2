import Axios from 'axios'
import { putData, postData } from '../../api/Api'
const initState = {
    listProduct : [],
    sort: '0',
    listViewed:[],
    listViewedUser:[],
    rendirect:1
}
const urlViewed =process.env.REACT_APP_VIEWEDS
const urlProduct =process.env.REACT_APP_PRODUCTS

const sortProduct = (arr,sort)=>{
    if(sort == 1){
        return arr.sort((a,b)=> a.price -b.price)
    }
    if(sort==2){
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

const fillterCategory = (arr,category)=>{
    if(category==0) return arr
    return arr.filter(item=>item.category==category)

}

const sortViewed=array=>{
    let newArray =[...array]
    for(let i=0;  i<array.length; i++){
         newArray[i]=array[array.length-i-1]
    }
    return newArray
}
const ProductReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'showListProduct':
            {
                return {
                    ...state,
                    listProduct: sortProduct(fillterCategory(action.listProduct,action.category),action.sort),
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
                    if(findUser.item.length>4){
                        findUser.item.shift()
                    }
                    putData(urlViewed+"/"+findUser.id,{
                        id:findUser.id,
                        idUser:findUser.idUser,
                        item:findUser.item
                    })
                }
            }
            else{
                postData(urlViewed,{idUser:action.id,item:[action.item]})
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
            putData(urlProduct+"/"+findProduct.id,action.item)
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
            putData(urlProduct+"/"+action.item.id,newListProduct1[index])
            return{
                ...state,
                listProduct:newListProduct1
            }
        case 'addProduct':
            const newListProduct2 = [...state.listProduct]
            newListProduct2.push(action.item)
            postData(urlProduct,action.item)
            return{
                ...state,
                listProduct:newListProduct2
            }
                             
        default: 
           return {...state}
    }
}
export default ProductReducer
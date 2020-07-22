import Axios from 'axios'
const initState = {
    listCart : [],
    listCartUser : []
}   
const users = JSON.parse(localStorage.getItem('logon'))
const urlCart =process.env.REACT_APP_CARTS


const CartReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'showListCart':
            {
                return {
                    ...state,
                    listCart: action.listCart
                }
            } 
        case 'showListCartUser':
            {
                return {
                    ...state,
                    listCartUser: action.listCart
                }
            }
        
        case 'addToCart':
            let newCart = [...state.listCart]
            action.item.count=action.count
            let userCart = newCart.find(user=>user.idUser==users.id);
            if(userCart){
                let findItem = userCart.itemselected.find(items=>items.id==action.item.id);
                findItem? findItem.count+=action.count : userCart.itemselected.push(action.item);
                Axios.put(urlCart+"/"+userCart.id,userCart)
            }
            else{
                Axios.post(urlCart,{idUser:users.id,itemselected:[action.item]})
            }
            return {
                ...state,
                listCartUser: userCart,     
            }
            
        case 'deleteItemCart':
            let newCart2 = [...state.listCartUser]
            let index = newCart2.findIndex(item=>item.id==action.id)
            newCart2.splice(index,1)
            let userCart2 = state.listCart.find(user=>user.idUser==users.id);
            Axios.put(urlCart+"/"+userCart2.id,{
              idUser:users.id,
              itemselected:newCart2,
              id:userCart2.id
            })
            return {
                ...state,
                listCartUser: newCart2
            }
            
        case 'deleteCart':
            let newCart3 = action.listCart
            newCart3.splice(0)
            let userCart3 = state.listCart.find(user=>user.idUser==users.id);
            Axios.put(urlCart+"/"+userCart3.id,
                {
                    idUser:users.id,
                    itemselected:newCart3,
                    id:userCart3.id
                })                
                return {
                    ...state,
                    listCartUser: newCart3
                }
                 
        default: 
           return {...state}
    }
}
export default CartReducer
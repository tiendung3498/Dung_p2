import Axios from 'axios'
const initState = {
    listUser : [],
    rendirect:1
}
const urlUser =process.env.REACT_APP_USERS
const UserReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'showListUser':
            {
                return {
                    ...state,
                    listUser: action.listUser
                }
            }  
        case 'updateUser':
            {
                const newListUser = [...state.listUser]
                let findUser = newListUser.find(user=>user.id == action.id)
                if(findUser) findUser = action.newUser
                Axios.put(urlUser+"/"+action.id,action.newUser)
                localStorage.setItem('logon',JSON.stringify(action.newUser))
                return{
                    ...state,
                    listUser : newListUser
                }
            }
        case 'changeStatusUser':
                const newListUser1 = [...state.listUser]
                let index = newListUser1.findIndex(item=>item.id==action.item.id)
                newListUser1[index].status = !newListUser1[index].status
                Axios.put(urlUser+"/"+action.item.id,newListUser1[index])
                return{
                    ...state,
                    listUser:newListUser1
                }
        case 'changeRendirect':
            {
                return {
                    ...state,
                    rendirect: action.value
                }
            }
         case 'updateUsers':
                {
                    const newListUser1 = [...state.listUser]
                    let findUser = newListUser1.find(user=>user.id == action.id)
                    if(findUser) findUser = action.newUser
                    Axios.put(urlUser+"/"+action.id,action.newUser)
                    return{
                        ...state,
                        listUser : newListUser1
                    }
                }
         case 'addUser':
            const newListUser2 = [...state.listUser]
            newListUser2.push(action.item)
            Axios.post(urlUser,action.item)
            return{
                ...state,
                listUser:newListUser2
            }
        default: 
           return {...state}
    }
}
export default UserReducer
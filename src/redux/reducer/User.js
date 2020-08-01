import Axios from 'axios'
const initState = {
    listUser : []
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
        
        default: 
           return {...state}
    }
}
export default UserReducer
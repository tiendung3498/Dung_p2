const initState = {
    listUser : []
}
const UserReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'showListUser':
            {
                return {
                    ...state,
                    listUser: action.listUser
                }
            }  

        default: 
           return {...state}
    }
}
export default UserReducer
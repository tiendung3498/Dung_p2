import Axios from 'axios'
const urlUser = process.env.REACT_APP_USERS

export const fetchUser = () =>{
    return async dispatch =>{
            try {
                Axios.get(urlUser)
                .then(res=>
                    dispatch( showListUser(res.data)))
            } catch (error) {
                alert('Error: '+error.message);  
            }
        }
             
}
export const showListUser = listUser => {
    return {
        type: 'showListUser',
        listUser,      
    }
}
export const updateUser = (id,newUser) => {
    return {
        type: 'updateUser',
        id,
        newUser      
    }
}

export const changeStatusUser = (item) => {
    return {
        type: 'changeStatusUser',
        item
    }
}
export const changeRendirectUser = value => {
    return {
        type: 'changeRendirect',
        value,
    }
}
export const updateUsers = (id,newUser) => {
    return {
        type: 'updateUsers',
        id,
        newUser      
    }
}
export const addUser = (item) => {
    return {
        type: 'addUser',
        item
    }
}
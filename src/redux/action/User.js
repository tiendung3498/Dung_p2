const urlUser = process.env.REACT_APP_USERS

export const fetchUser = () =>{
    return async dispatch =>{
            let string =urlUser;
            try {
                const request = string;
                const response = await fetch(request);
                const responseJson = await response.json();
                dispatch( showListUser(responseJson) )   
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
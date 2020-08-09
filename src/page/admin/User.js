import React from 'react'
import {useSelector} from 'react-redux'
import LayoutAdmin from './component/LayoutAdmin'
import TableUser from './component/componentUser/TableUser'
import EditUser from './component/componentUser/EditUser'
import AddUser from './component/componentUser/AddUser'
const User = ()=>{
    const rendirect = useSelector(state=>state.product.rendirect)
    return(
        <LayoutAdmin>
               {rendirect===1 && <TableUser/>}
               {rendirect===2 && <EditUser data = {JSON.parse(localStorage.getItem('user-update'))}/> }
               {rendirect===3 && <AddUser/> }     
        </LayoutAdmin>
        )
}
export default User
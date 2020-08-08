import React from 'react'
import LayoutAdmin from './component/LayoutAdmin'
import './Admin.css'
const Admin = ()=>{
    const admin = JSON.parse(localStorage.getItem('logon'))
    if(admin.role !== 'admin') window.location.href='/'
    else{
        return(
            <LayoutAdmin/>
        )
    }
}
export default Admin
import React from 'react'
import NavAdmin from "./NavAdmin";
import SideBar from "./SideBar";
import FooterAdmin from "./FooterAdmin";

const LayoutAdmin = (props)=>{
    return(
        <div className="admin--page">
        <NavAdmin/>

        <div className="wrap--admin">
            <SideBar/>

            <div className="wrap--content">
                <div className="container-fluid mt-4">
                    {props.children}
                </div>

                <FooterAdmin/>
            </div>
        </div>
    </div>
    )
}
export default LayoutAdmin
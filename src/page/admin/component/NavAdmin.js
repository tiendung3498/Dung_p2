import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavAdmin = ()=> {
    const { t } = useTranslation('common');

    const  logOut=()=>{
        localStorage.removeItem("logon");
        window.location.href = '/';
    }
    return (
        <Navbar>
            <Navbar.Brand className="mr-auto logo" href="/admin-products">{t('menuAdmin.namestore')}</Navbar.Brand>
            <div className="notification_admin">       
                <button className="btn btn-light"><a onClick = {logOut} >{t('header.signout')}</a></button>
            </div>
        </Navbar>
    );
}


export default NavAdmin;
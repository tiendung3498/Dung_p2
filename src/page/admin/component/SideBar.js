import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const SideBar =()=>{
    const { t } = useTranslation('common');

        return (
            <ul className="sidebar navbar-nav bg-dark">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>{t('menuAdmin.dashboard')}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-users">
                        <i className="fas fa-users"/>
                        <span>{t('menuAdmin.user')}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-products" >
                        <i className="fab fa-elementor"/>
                        <span>{t('menuAdmin.product')}</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-order">
                        <i className="fas fa-address-book"/>
                        <span>{t('menuAdmin.listorder')}</span>
                    </Link>
                </li>
            </ul>
        );
    
}


export default SideBar
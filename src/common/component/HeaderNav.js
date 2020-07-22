import React from 'react'
import { useTranslation } from 'react-i18next';
const HeaderNav = ()=>{

const { t } = useTranslation('common');

 return(
    <div>
        <div className="header-navbar">
            <ul className="header-navbar__menu">
                <li className="header-navbar__menu-item">
                    <a className="fas fa-bars" href="#"></a>
                </li>
                <li className="header-navbar__menu-item"><a href="/">{t('menu.home')}</a></li>
                <li className="header-navbar__menu-item"><a href="#">{t('menu.introduction')}</a></li>
                <li className="header-navbar__menu-item"><a href="#">{t('menu.product')}<i className="fas fa-caret-down"></i></a></li>
                <li className="header-navbar__menu-item"><a href="#">{t('menu.newproduct')}<i className="fas fa-caret-down"></i></a></li>
                <li className="header-navbar__menu-item"><a href="#">{t('menu.news')}</a></li>
                <li className="header-navbar__menu-item"><a href="#">{t('menu.contact')}</a></li>
            </ul>
        </div>
        <div className="header-nav-hide"><input type="checkbox" id="nav-check"/>
            <div className="header-nav-hide__btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className="header-nav-hide__group">
                <i className="fas fa-search"></i>
                <i className="fas fa-shopping-basket"></i>
            </div>
            <div className="header-nav-hide__nav-links">
                <a href="#">{t('menu.home')}</a>
                <a href="#">{t('menu.introduction')}</a>
                <a href="#">{t('menu.product')}</a>
                <a href="#">{t('menu.newproduct')}</a>
                <a href="#">{t('menu.news')}</a>
                <a href="#">{t('menu.contact')}</a>
                </div>
        </div>
    </div>
 );
}
export default HeaderNav
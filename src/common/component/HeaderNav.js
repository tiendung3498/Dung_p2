import React from 'react'

const HeaderNav = ()=>{
 return(
    <div>
        <div className="header-navbar">
            <ul className="header-navbar__menu">
                <li className="header-navbar__menu-item">
                    <a className="fas fa-bars" href="#"></a>
                </li>
                <li className="header-navbar__menu-item"><a href="/">trang chủ</a></li>
                <li className="header-navbar__menu-item"><a href="#">giới thiệu</a></li>
                <li className="header-navbar__menu-item"><a href="#">sản phẩm<i className="fas fa-caret-down"></i></a></li>
                <li className="header-navbar__menu-item"><a href="#">sản phẩm mới<i className="fas fa-caret-down"></i></a></li>
                <li className="header-navbar__menu-item"><a href="#">tin tức</a></li>
                <li className="header-navbar__menu-item"><a href="#">liên hệ</a></li>
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
                <a href="#">trang chủ</a>
                <a href="#">giới thiệu</a>
                <a href="#">sản phẩm</a>
                <a href="#">sản phẩm mới</a>
                <a href="#">tin tức</a>
                <a href="#">liên hệ</a>
                </div>
        </div>
    </div>
 );
}
export default HeaderNav
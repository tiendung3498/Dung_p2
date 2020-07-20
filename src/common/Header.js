import React from 'react'
import HeaderNav from './component/HeaderNav'

const Header = ()=>{
    return(
        <header>
        <div className="header__top">
            <div className="header__top--container">
                <div className="openTime">
                    <p>open time:8:00-18:00 Monday-Sunday</p>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-tumblr"></i>
                    <i className="fab fa-vimeo-v"></i>
                </div>
                <div className="login__logout">
                    <div className="login">
                        <i className="fas fa-user" href='./signin'>đăng nhập</i>
                    </div>
                    <div className="logout">
                        <i className="fas fa-user-plus">đăng kí</i>
                    </div>
                </div>
            </div>
            <div className="header__background">
                <div className="header__content">
                    <div className="header__content--logo"></div>
                    <div className="header__content--search">
                        <div className="header__content--search--hotline">
                            <i className="fas fa-phone-alt">  HỖ TRỢ: (04) 6674 2332 - (04) 3786 8904</i>
                        </div>
                        <div className="header__content--search--search">
                            <input type="text" id="search" placeholder="Tìm kiếm..."/>
                            <label className="fas fa-search" htmlFor="search"></label>
                        </div>
                        <div className="header__content--search--cart">
                            <a href="./cart">
                                <i className="fas fa-shopping-basket"  >0 Sản phẩm</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderNav/>
        </div>
    </header>
    );
}
export default Header
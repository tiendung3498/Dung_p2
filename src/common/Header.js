import React, { useRef, useEffect } from 'react'

const Header = ()=>{

    const stateSignin = useRef(null) 
    const stateSignout = useRef(null) 
    const stateSignup= useRef(null) 

    useEffect(() => {
       if(localStorage.getItem('logon')){
        stateSignin.current.style.display="none"
        stateSignup.current.style.display="none"
       }
       else{
        stateSignout.current.style.display="none"
       }
    }, [])

    const handleSignOut=()=>{
        localStorage.removeItem('logon')
        window.location.reload()
    }
    return(
        <header>
        <div className="header__top">
            <div className="header__top--container">
                <div className="openTime">
                    <p>open time:8:00-18:00 Monday-Sunday</p><i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i><i className="fab fa-tumblr"></i><i className="fab fa-vimeo-v"></i></div>
                <div className="login__logout">
                    <div className="login" ref={stateSignin}><a href="/signIn"><i className="fas fa-user">đăng nhập</i></a></div>
                    <div className="logout" ref={stateSignup} ><a href="/Signup"><i className="fas fa-user-plus">đăng kí</i></a></div>
                    <div className="logout" ref={stateSignout} onClick={handleSignOut}><i className="fas fa-user-plus">đăng xuất</i></div>

                </div>
            </div>
            <div className="header__background">
                <div className="header__content">
                    <div className="header__content--logo"></div>
                    <div className="header__content--search">
                        <div className="header__content--search--hotline"><i className="fas fa-phone-alt">  HỖ TRỢ: (04) 6674 2332 - (04) 3786 8904</i></div>
                        <div className="header__content--search--search"><input type="text" id="search" placeholder="Tìm kiếm..."/><label className="fas fa-search" htmlFor="search"></label></div>
                        <div className="header__content--search--cart"><a href="./cart"><i className="fas fa-shopping-basket"  >0 Sản phẩm</i></a></div>
                    </div>
                </div>
            </div>
        </div>
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
            <div className="header-nav-hide__btn"><label htmlFor="nav-check"><span></span><span></span><span></span></label></div>
            <div className="header-nav-hide__group"><i className="fas fa-search"></i><i className="fas fa-shopping-basket"></i></div>
            <div className="header-nav-hide__nav-links"><a href="#">trang chủ</a><a href="#">giới thiệu</a><a href="#">sản phẩm</a><a href="#">sản phẩm mới</a><a href="#">tin tức</a><a href="#">liên hệ</a></div>
        </div>
    </header>
    );
}
export default Header
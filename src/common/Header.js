import React, { useRef,useEffect } from 'react'
import HeaderNav from './component/HeaderNav'
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch} from 'react-redux'
import { fetchCartUser } from '../redux/action/Cart'
const Header = ()=>{
    const { t } = useTranslation('common')
    const dataCartUser = useSelector(state=>state.cart.listCartUser)
    const users = JSON.parse(localStorage.getItem('logon'))
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCartUser(users.id))
    }, [dataCartUser.length])

    const handleSignOut = ()=>{
        localStorage.removeItem('logon')
        window.location.href= '/signin'
    }
    return(

        <header>
        <div className="header__top">
            <div className="header__top--container">
                <div className="openTime">
                    <p>{t('header.time')}</p>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-tumblr"></i>
                    <i className="fab fa-vimeo-v"></i>
                </div>
                <div className="login__logout">
                    <div className="login">
                        {!localStorage.getItem('logon')&&<a href='/signin'><i className="fas fa-user">{t('header.signin')}</i></a>}
                    </div>
                    <div className="login">
                        {localStorage.getItem('logon')&&<i className="fas fa-user" onClick={handleSignOut}>{t('header.signout')}</i>}
                    </div>
                    <div className="login">
                        {!localStorage.getItem('logon')&&<a href="/signup"><i className="fas fa-user-plus">{t('header.signup')}</i></a>}
                    </div>
                </div>
            </div>
            <div className="header__background">
                <div className="header__content">
                    <div className="header__content--logo"></div>
                    <div className="header__content--search">
                        <div className="header__content--search--hotline">
                            <i className="fas fa-phone-alt"> {t('header.phone')}</i>
                        </div>
                        <div className="header__content--search--search">
                            <input type="text" id="search" placeholder="Tìm kiếm..."/>
                            <label className="fas fa-search" htmlFor="search"></label>
                        </div>
                        <div className="header__content--search--cart">
                            <a href="./cart">
                              {localStorage.getItem('logon')&&<i className="fas fa-shopping-basket">{dataCartUser.length+" "}{t('header.cart')}</i>} 
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
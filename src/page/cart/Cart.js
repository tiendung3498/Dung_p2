import React, { useEffect, useState } from 'react'
import './Cart.css'
import CartItem from './component/CartItem'
import { useSelector, useDispatch} from 'react-redux'
import Header from '../../../src/common/Header'
import Footer from '../../../src/common/Footer'
import CartBill from './component/CartBill'
import { fetchCartUser } from '../../redux/action/Cart'
import { useTranslation } from 'react-i18next';

const Cart = ()=>{
    
    const { t } = useTranslation('common');
    const dispatch = useDispatch()
    const listCartUser = useSelector(state=>state.cart.listCartUser)
    const users = JSON.parse(localStorage.getItem('logon'))
    
    useEffect(() => {
        dispatch(fetchCartUser(users.id))
    }, [listCartUser])
 
    return(
        <div>
            <Header/>
            <div className="cart__title">
                <div>
                    <a href="/">{t('home.home')}</a>
                    <a href="#">{t('cart.cart')}</a>
                </div>
            </div>
            <h3 className="cart__title--name">{t('cart.cart')}</h3>
            <div className="cart__product">
                <CartItem  />        
                <CartBill />
            </div>
            <Footer/>
        </div>
    )
}
export default Cart
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {fetchCart,fetchCartUser, deleteItemCart, deleteCart} from '../../../redux/action/Cart'
import { useSelector,useDispatch } from 'react-redux'
import CartColumn from './CartColumn'
import { useTranslation } from 'react-i18next';
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

const CartItem = ()=>{
   
   const { t } = useTranslation('common');
   const listCartUser = useSelector(state=>state.cart.listCartUser)
   const users = JSON.parse(localStorage.getItem('logon'))
   const dispatch = useDispatch()
   const [loading,setLoading] = useState(false)
    
   const loadings = ()=>{
       setLoading(true)
       setTimeout(() => {
           setLoading(false)
       }, 500);
   }
  
   useEffect(() => {
      dispatch(fetchCart())
   }, [])
   
   useEffect(() => {
      dispatch(fetchCartUser(users.id))
   }, [listCartUser.length])
   
   const deleteItem = (id)=>{
      loadings()
      setTimeout(() => {
         dispatch(deleteItemCart(id))
      }, 500);

       
   }

   const deleteAllCartUser=()=>{
      loadings()
      setTimeout(() => {
         dispatch(deleteCart())
      }, 500);
   }
    if(listCartUser.length>0){
      return(
         <div>
            <Loading 
               show = {loading}
               color='#3fb871'
            />
            <CartColumn/>
            {listCartUser.map(item=>
               <div className="cart__product--item">
                 <img src={process.env.PUBLIC_URL+item.img} alt="" />
                 <span className="cart__product--item name">{item.name}</span>
                 <span className="cart__product--item price">{item.price+".000 đ"}</span>
                 <span className="cart__product--item quantity"><p>{item.count}</p></span>
                 <span className="cart__product--item total">{item.price*item.count+".000đ"}</span>
                 <span className="cart__product--item delete">
                     <button onClick={()=>deleteItem(item.id)}><p className="fas fa-trash-alt"></p></button>
                  </span>
               </div>)}
               <div className="cart__product--action">
                  <a className="cancel" onClick={()=>deleteAllCartUser()}>{t('cart.cancel')}</a>
                  <a className="buy" href="/">{t('cart.continuebuy')}</a>
               </div>
         </div>
      )
    }
    else{
       return(
          <h2>{t('cart.noproduct')}</h2>
       )
    }
}
export default CartItem
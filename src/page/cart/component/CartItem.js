import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {fetchCart, deleteItemCart, deleteCart} from '../../../redux/action/Cart'
import { useSelector,useDispatch } from 'react-redux'
import CartColumn from './CartColumn'
import { useTranslation } from 'react-i18next';

const CartItem = ()=>{
   
   const { t } = useTranslation('common');
   const listCartUser = useSelector(state=>state.cart.listCartUser)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchCart())
   }, [])
   
   const deleteItem = (id)=>{
       dispatch(deleteItemCart(id))
       
   }

const deleteAllCartUser=(list)=>{
      dispatch(deleteCart(list))
}
    if(listCartUser.length>0){
      return(
         <div>
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
                  <a className="cancel" onClick={()=>deleteAllCartUser(listCartUser)}>{t('cart.cancel')}</a>
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
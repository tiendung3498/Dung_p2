import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

const CartBill = ()=>{

    const { t } = useTranslation('common');
    const listCartUser = useSelector(state=>state.cart.listCartUser)
    let totalPrice = 0;
    if(listCartUser.length>0){
        listCartUser.map(item=>totalPrice+=item.price*item.count)
        let tax =totalPrice*10/100
        return(
            <div className="cart__product--bill">
                        <div className="cart__product--bill--info">
                            <div className="cart__product--bill--info--item">
                                <div className="cart__product--bill--info--item--title">{t('cart.totalprice')}</div>
                                <div className="cart__product--bill--info--item--price">{totalPrice+".000 đ"}</div>
                            </div>
                            <div className="cart__product--bill--info--item">
                                <div className="cart__product--bill--info--item--title">{t('cart.tax')}</div>
                                <div className="cart__product--bill--info--item--price">{tax+".000đ"}</div>
                            </div>
                            <div className="cart__product--bill--info--item">
                                <div className="cart__product--bill--info--item--title">{t('cart.totalpay')}</div>
                                <div className="cart__product--bill--info--item--price">{totalPrice+tax+".000 đ"}</div>
                            </div>
                            <a className="cart__product--bill--info--buy " href="#">{t('cart.pay')}</a>
                        </div>
                    </div>
        )
    }
    else{
        return(
          <div></div>
        );
    }
}
export default CartBill
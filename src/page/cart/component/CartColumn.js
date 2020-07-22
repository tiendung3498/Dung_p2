import React from 'react'
import { useTranslation } from 'react-i18next';

const CartColumn = ()=>{

    const { t } = useTranslation('common');
    return(
        <div className="cart__product--title">
                <span className="cart__product--title img">{t('cart.column1')}</span>
                <span className="cart__product--title name">{t('cart.column2')}</span>
                <span className="cart__product--title price">{t('cart.column3')}</span>
                <span className="cart__product--title quantity">{t('cart.column4')}</span>
                <span className="cart__product--title total">{t('cart.column5')}</span>
                <span className="cart__product--title delete">{t('cart.column6')}</span>
         </div>
    )

}
export default CartColumn
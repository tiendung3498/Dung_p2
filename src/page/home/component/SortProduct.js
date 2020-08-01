import React from 'react'
import { useTranslation } from 'react-i18next';

const SortProduct = ({sort,handleChange})=>{
    const { t } = useTranslation('common');

    return(
        <div className="product__sort-box">
        <p className="product__sort-title">{t('product.orderby')}</p>
        <select
            value={sort}
            onChange={handleChange}
        >
            <option value="1"> {t('product.select')}</option>
            <option value="2"> {t('product.price')}</option>
            <option value="3"> {t('product.anphabet')}</option>
        </select>
    </div>
    )
}
export default SortProduct
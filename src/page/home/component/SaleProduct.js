import React from 'react'
import SaleProductItem from './SaleProductItem'
import SaleProductGrid from './SaleProductGrid'
import { useTranslation } from 'react-i18next';


const SaleProduct = ()=>{
    
    const { t } = useTranslation('common');
    return(
        <section className="saleproduct">
        <div className="saleproduct__grid">
            <div className="saleproduct__grid--left">
                <div className="saleproduct__grid--left--title">
                    <h4>{t('product.title2')}</h4>
                </div>
            <SaleProductItem/>
            </div>
            <div className="saleproduct__grid--right">
                <div className="saleproduct__grid--right--title">
                    <h4>{t('product.title3')}</h4>
                    <div>
                        <span className="fas fa-chevron-left"></span>
                        <span className="fas fa-chevron-right"></span>
                    </div>
                </div>
                <SaleProductGrid/>
            </div>
        </div>
    </section>
    );
}
export default SaleProduct
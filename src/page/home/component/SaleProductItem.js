import React from 'react'
import { useTranslation } from 'react-i18next';

const SaleProductItem = ()=>{
    
    const { t } = useTranslation('common');
    return(
       <div>
              <div className="saleproduct__grid--left--item">
                    <img src="../img/spx2-15.png" alt="" />
                    <div>
                        <a href="">{t('product.2')}</a>
                        <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </span>
                        <p>{t('price.1')}</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item">
                    <img src="../img/spx2-12.png" alt="" />
                    <div>
                        <a href="">{t('product.3')}</a>
                        <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </span>
                        <p>{t('price.1')}</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item">
                    <img src="../img/spx2-11.png" alt="" />
                    <div>
                        <a href="">{t('product.1')}</a>
                        <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </span>
                        <p>{t('price.1')}</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item">
                    <img src="../img/spx2-2.png" alt="" />
                    <div>
                        <a href="">{t('product.4')}</a>
                        <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </span>
                        <p>{t('price.1')}</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item">
                    <img src="../img/spx2-8.png" alt="" />
                    <div>
                        <a href="">{t('product.5')}</a>
                        <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </span>
                        <p>{t('price.1')}</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item--final">
                    <img src="../img/spx2-1.png" alt="" />
                    <div>
                        <a href="">{t('product.6')}</a>
                        <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </span>
                        <p>{t('price.1')}</p>
                    </div>
                </div>
       </div>
    );
}
export default SaleProductItem
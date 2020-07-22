import React from 'react'
import { useTranslation } from 'react-i18next';

const SaleProductGrid = ()=>{
    const { t } = useTranslation('common');

    return(
            <div className="saleproduct__grid--right--grid">
              <div className="hotproduct__grid--small">
                    <div className="saleproduct__grid--right--grid--item--newred">{t('product.new')}</div>
                        <div className="hotproduct__grid--small--image">
                            <img src="../img/spx2-15.png" alt="" />
                            <div></div>
                            <p>
                                <a href="">{t('product.buy')}</a>
                                <a className="-search fas fa-search"></a>
                            </p>
                        </div>
                        <p className="hotproduct__grid--small--title">{t('product.1')}
                            <span>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star-half-alt"></i>
                            </span>
                        </p>
                        <p className="hotproduct__grid--small--price">{t('price.1')}
                            <del>{t('price.1')}</del>
                        </p>
                    </div>
                    <div className="hotproduct__grid--small">
                        <div className="saleproduct__grid--right--grid--item--newred">{t('product.new')}</div>
                        <div className="hotproduct__grid--small--image">
                            <img src="../img/spx2-7.png" alt="" />
                            <div></div>
                            <p>
                                <a href="">{t('product.buy')}</a>
                                <a className="-search fas fa-search"></a>
                            </p>
                        </div>
                        <p className="hotproduct__grid--small--title">{t('product.2')}
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </span>
                        
                        </p>
                        <p className="hotproduct__grid--small--price">{t('price.3')}
                           <del>{t('price.1')}</del>
                        </p>
                    </div>
                    <div className="saleproduct__grid--right--grid--item">
                        <div className="saleproduct__grid--right--grid--item--image">
                            <img src="../img/spx2-12.png" alt="" />
                            <div></div>
                            <p>
                                <a href="#">{t('product.buy')}</a>
                                <a className="-search fas fa-search" href=""></a>
                            </p>
                        </div>
                        <p className="saleproduct__grid--right--grid--item--title">{t('product.3')}
                            <span>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star-half-alt"></i>
                            </span>
                        </p>
                        <p className="saleproduct__grid--right--grid--item--price">{t('price.4')}
                            <del>{t('price.1')}</del>
                        </p>
                    </div>
                    <div className="saleproduct__grid--right--grid--item">
                        <div className="saleproduct__grid--right--grid--item--image">
                            <img src="../img/spx2-11.png" alt="" />
                            <div></div>
                            <p>
                                <a href="#">{t('product.buy')}</a>
                                <a className="-search fas fa-search" href=""></a>
                            </p>
                        </div>
                        <p className="saleproduct__grid--right--grid--item--title">{t('product.4')}
                           <span>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star-half-alt"></i>
                            </span>
                        </p>
                        <p className="saleproduct__grid--right--grid--item--price">{t('price.1')}
                           <del>{t('price.1')}</del>
                        </p>
                    </div>
                    <div className="saleproduct__grid--right--grid--item">
                        <div className="saleproduct__grid--right--grid--item--image">
                            <img src="../img/spx2-1.png" alt="" />
                            <div></div>
                            <p>
                                <a href="#">{t('product.buy')}</a>
                                <a className="-search fas fa-search" href=""></a>
                            </p>
                        </div>
                        <p className="saleproduct__grid--right--grid--item--title">{t('product.5')}
                           <span>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star-half-alt"></i>
                            </span>
                        </p>
                        <p className="saleproduct__grid--right--grid--item--price">{t('price.2')}
                           <del>{t('price.1')}</del>
                        </p>
                    </div>
                    <div className="saleproduct__grid--right--grid--item">
                        <div className="saleproduct__grid--right--grid--item--image">
                            <img src="../img/spx2-7.png" alt="" />
                            <div></div>
                            <p>
                                <a href="#">{t('product.buy')}</a>
                                <a className="-search fas fa-search" href=""></a>
                            </p>
                        </div>
                        <p className="saleproduct__grid--right--grid--item--title">{t('product.6')}
                           <span>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star-half-alt"></i>
                            </span>
                        </p>
                        <p className="saleproduct__grid--right--grid--item--price">{t('1.000.000 đ')}
                           <del>{t('price.1')}</del>
                        </p>
                    </div>
            </div>
    )
}
export default SaleProductGrid
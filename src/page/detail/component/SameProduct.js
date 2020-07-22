import React from 'react'
import { useTranslation } from 'react-i18next';

const SameProduct = ()=>{
    const { t } = useTranslation('common');
    return(
        <div className="detail__content--product">
        <div className="detail__content--product--item">
            <div className="detail__content--product--item--image">
                <img src={process.env.PUBLIC_URL+'/img/spx2-11.png'} alt="" />
                <div></div>
                <p><a href="#">{t('product.buy')}</a>
                    <a className="-search fas fa-search" href=""></a>
                </p>
            </div>
            <p className="detail__content--product--item--title">{t('product.4')}
                <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </span>
            </p>
            <p className="detail__content--product--item--price">{t('price.1')}
                <del>{t('price.1')}</del>
            </p>
        </div>
        <div className="detail__content--product--item">
            <div className="detail__content--product--item--image">
                <img src={process.env.PUBLIC_URL+'/img/spx2-11.png'} alt="" />
                <div></div>
                <p><a href="#">{t('product.buy')}</a>
                    <a className="-search fas fa-search" href=""></a>
                </p>
            </div>
            <p className="detail__content--product--item--title">{t('product.7')}
                <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </span>
            </p>
            <p className="detail__content--product--item--price">{t('price.1')}
                <del>{t('price.1')}</del>
            </p>
        </div>
        <div className="detail__content--product--item">
            <div className="detail__content--product--item--image">
                <img src={process.env.PUBLIC_URL+"../img/spx2-8.png"} alt="" />
                <div></div>
                <p><a href="#">{t('product.buy')}</a>
                    <a className="-search fas fa-search" href=""></a>
                </p>
            </div>
            <p className="detail__content--product--item--title">{t('product.8')}
                <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </span>
            </p>
            <p className="detail__content--product--item--price">{t('price.1')}
                <del>{t('price.1')}</del>
            </p>
        </div>
        <div className="detail__content--product--item">
            <div className="detail__content--product--item--image">
                <img src={process.env.PUBLIC_URL+"../img/spx2-12.png"} alt="" />
                <div></div>
                <p><a href="#">{t('product.buy')}</a>
                    <a className="-search fas fa-search" href=""></a>
                </p>
            </div>
            <p className="detail__content--product--item--title">{t('product.9')}
                <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </span>
            </p>
            <p className="detail__content--product--item--price">{t('price.1')}
                <del>{t('price.1')}</del>
            </p>
        </div>
    </div>
    );
}
export default SameProduct
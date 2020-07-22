import React from 'react';
import { useTranslation } from 'react-i18next';

const Productitem = ({data,showDetail,addToCart})=>{
    const { t } = useTranslation('common');

    return(        
            <div className="hotproduct__grid--small">
            <div className="newproduct__grid--item--new">{t('product.new')}</div>
            <div className="hotproduct__grid--small--image">
                <img src={process.env.PUBLIC_URL +data.img} alt="" />
                <div></div>
                <p>{localStorage.getItem('logon')&&<a onClick={addToCart}>{t('product.buy')}</a>}
                    <a className="-search fas fa-search" onClick={showDetail}></a>
                </p>
            </div>
            <p className="hotproduct__grid--small--title">{data.name}
                <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </span>
            </p>
            <p className="hotproduct__grid--small--price">{data.price+".000đ"}
                <del>{data.del}</del>
            </p>        
        </div>
    
    );
}
export default Productitem
import React, { useState, useRef,useEffect } from 'react';
import './detail.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer'
import SameProduct from './component/SameProduct'
import DetailInformation from './component/DetailInformation';
import { useDispatch,useSelector } from 'react-redux'
import {fetchCart, addToCart,fetchCartUser} from '../../redux/action/Cart'
import { useTranslation } from 'react-i18next';
import { FacebookProvider, Comments,ShareButton } from 'react-facebook';


const Detail = ()=>{
    const { t } = useTranslation('common');
    const [count,setCount] = useState(1);
    const counts = useRef(null)
    const dispatch = useDispatch()
    const urlProduct = process.env.REACT_APP_PRODUCTS

    const onChange = ()=>{
        setCount(parseInt(counts.current.value));
    }
    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    const addCart=(item)=>{
        localStorage.removeItem('item-detail')
        dispatch(addToCart(item,count))
        setTimeout(() => {
            window.location.href='/'
        }, 500);
        
    }
    let item = JSON.parse(localStorage.getItem('item-detail'));
    if(item){
        return( 
            <div>
                <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" 
                        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0&appId=292558181938829&autoLogAppEvents=1"
                        nonce="bWA0u496">
                    </script>
                <div id="fb-root"></div>
                <Header/>
                    <div className="detail__title">
                       <div>{t('home.home')}
                           <a href="#">{item.name}</a>
                        </div>
                    </div>
                    <div className="detail__content">
                        <div className="detail__content--mainProduct">
                           <div className="detail__content--mainProduct--left">
                               <img className="img__main" src={process.env.PUBLIC_URL+item.img} alt="" />
                               <div className="img__more">
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-1.png'} alt="" />
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-5.png'} alt="" />
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-7.png'} alt="" />
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-10.png'} alt="" />
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-14.png'} alt="" /></div>
                               </div>
                           <div className="detail__content--mainProduct--right">
                                <h3 className="name">{item.name}</h3>
                                <span className="rate">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                                <h3 className="price">{item.price*count+".000đ"}<del>{item.del}</del></h3>
                                <p className="detail__content--mainProduct--right--detail">
                                   {t('detail.des')}
                                </p>
                                {localStorage.getItem('logon')&&
                                <div className="detail__content--mainProduct--right--amount">
                                   <p>{t('detail.quant')}</p>
                                   <input className="form-control input--value" 
                                        type="number" min="1" 
                                        defaultValue={count}
                                        ref = {counts}
                                        onChange = {onChange} />
                                    
                                </div>
                                }
                                <div className="detail__content--mainProduct--right--btn">
                                    {localStorage.getItem('logon')&&
                                    <div className="btn__group">
                                        <a className="buy" onClick={()=>addCart(item)}>{t('product.buy')}</a>
                                        <a className="fas fa-search" href="#"></a>
                                        <a className="item-right__btn-another -love fas fa-heart" href="#"></a>
                                    </div>
                                    }
                                </div>
                                <div className="detail__content--mainProduct--right--social">
                                    <a className="fb" href="#">
                                        <i className="fab fa-facebook-square">{t(' Like')}</i>
                                        <span>{t('detail.count')}</span>
                                    </a>
                                    <a className="twitch" href="#">
                                        <i className="fab fa-twitter">{t('Tweet')}</i>
                                    </a>
                                    <a className="gg" href="#">
                                        <i className="fab fa-google-plus-g"></i>
                                        <span>{t(' 0')}</span>
                                    </a>
                                    <a className="Share">
                                    <FacebookProvider appId="238875337232479">
                                        <ShareButton href="http://www.facebook.com">
                                            <i className="fas fa-plus-square">{t('facebook.share')}</i>
                                        </ShareButton>
                                    </FacebookProvider>
                                    </a>
                                    <div class="fb-comments" data-href={urlProduct+"/"+item.id} data-numposts="5" data-width=""></div>                                </div>
                            </div>
                        </div>
                        <DetailInformation/>   
                        <div className="detail__content--title">
                           <h4>{t('Sản phẩm cùng loại')}</h4>
                        <div>
                            <span className="fas fa-chevron-left"></span>
                            <span className="fas fa-chevron-right"></span>
                        </div>
                        </div>
                    <SameProduct/>
                    </div>
                <Footer/>
            </div>
        );
    }
    else{
        window.location.href= '/'
    }
  
}
export default Detail
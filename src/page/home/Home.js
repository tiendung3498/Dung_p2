import React,{useEffect} from 'react'
import {fetchProduct} from '../../redux/action/Product'
import { useSelector,useDispatch } from 'react-redux'
import Header from '../../../src/common/Header'
import Footer from '../../../src/common/Footer'
import Productitem from './component/Productitem'
import Banner from './component/Banner'
import HotProduct from './component/HotProduct'
import SaleProduct from './component/SaleProduct'
import News from './component/News'
import "./home.css";
import Axios from 'axios'
import { useTranslation } from 'react-i18next';

const Home = ()=>{
    const urlCart = process.env.REACT_APP_CARTS
    const dispatch = useDispatch();
    const listProduct = useSelector(state=>state.product.listProduct)
    const { t } = useTranslation('common');

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    

    const showDetail=(item)=>{
         localStorage.setItem('item-detail',JSON.stringify(item));
         window.location.href = '/detail'
    }

    const addToCart = (item)=>{
        Axios.post(urlCart, { item })
    }

    return(
        <div>
            <Header/>
            <Banner/>
            <HotProduct/>
            <SaleProduct/>

            <section className="banner__slide">
                <img src={process.env.PUBLIC_URL+'/img/banner-11140x217.png'} alt="" />
            </section>
            <section className="newproduct">
                <div className="newproduct__title">
                    <h4>{t('menu.newproduct')}</h4>
                    <div>
                      <span className="fas fa-chevron-left"></span>
                      <span className="fas fa-chevron-right"></span>
                    </div>
                </div>
                <div className="newproduct__grid">
                    {listProduct.map(item=><Productitem data = {item}
                                                showDetail ={()=>showDetail(item)}
                                                addToCart = {()=>addToCart(item)}
                                                  />)}
                </div>
            </section>
           <News/>
           <Footer/>
        </div>
    );
}
export default Home
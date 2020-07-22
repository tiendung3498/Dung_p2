import React,{useEffect} from 'react'
import {fetchProduct} from '../../redux/action/Product'
import {fetchCart, addToCart,fetchCartUser} from '../../redux/action/Cart'
import { useSelector,useDispatch } from 'react-redux'
import Header from '../../../src/common/Header'
import Footer from '../../../src/common/Footer'
import Productitem from './component/Productitem'
import Banner from './component/Banner'
import HotProduct from './component/HotProduct'
import SaleProduct from './component/SaleProduct'
import News from './component/News'
import "./home.css";
import { useTranslation } from 'react-i18next';

const Home = ()=>{
    const dispatch = useDispatch();
    const listProduct = useSelector(state=>state.product.listProduct)
    const { t } = useTranslation('common');
    const users = JSON.parse(localStorage.getItem('logon'))
    const listCartUser = useSelector(state=>state.cart.listCartUser)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    
    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    useEffect(() => {
        dispatch(fetchCartUser(users.id))
    }, [listCartUser])
    
    const showDetail=(item)=>{
         localStorage.setItem('item-detail',JSON.stringify(item));
         window.location.href = '/detail'
    }

    const addItem = item=>{
        dispatch(addToCart(item,1));
    }

    return(
        <div>
            <Header />
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
                                                addToCart = {()=>addItem(item)}
                                                  />)}
                </div>
            </section>
           <News/>
           <Footer/>
        </div>
    );
}
export default Home
import React,{useEffect} from 'react'
import {fetchProduct,changeSort, fetchViewed, addItemViewed} from '../../redux/action/Product'
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
import SortProduct from './component/SortProduct'
import ProductTitle from './component/ProductTitle'

const Home = ()=>{
    const dispatch = useDispatch();
    const listProduct = useSelector(state=>state.product.listProduct)
    const { t } = useTranslation('common');
    const users = JSON.parse(localStorage.getItem('logon'))
    const listCartUser = useSelector(state=>state.cart.listCartUser)
    const sort = useSelector(state=>state.product.sort)
    const listViewed = useSelector(state=>state.product.listViewed)

    useEffect(() => {
        dispatch(fetchProduct(sort))
    }, [])
    
    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    useEffect(() => {
        dispatch(fetchViewed())
    }, [])
    useEffect(() => {
        dispatch(fetchCartUser(users.id))
    }, [listCartUser])
    
    const showDetail=(item)=>{
         localStorage.setItem('item-detail',JSON.stringify(item));
         window.location.href = '/detail'
         dispatch(addItemViewed(item))     
    }

    const addItem = item=>{
        dispatch(addToCart(item,1));
    }

    const handleChange = event=>{
        const value = event.target.value;
        dispatch(changeSort(value));
        if(value==1) return;
        else dispatch(fetchProduct(value));   
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
                <ProductTitle title = {t('menu.newproduct')}/>
                <SortProduct sort = {sort} handleChange ={handleChange}/>
                <div className="newproduct__grid">
                    {listProduct.map(item=> item.status && 
                                            <Productitem data = {item}
                                                showDetail ={()=>showDetail(item)}
                                                addToCart = {()=>addItem(item)}
                                                  />)}
                </div>
            </section>
            <section className="newproduct">
                <ProductTitle title ={t('product.recentlyproduct')}/>
                <div className="newproduct__grid">
                {listViewed.map(item=><Productitem data = {item}
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
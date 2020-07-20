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
const Home = ()=>{
    const dispatch = useDispatch();
    const listProduct = useSelector(state=>state.product.listProduct)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    

    const showDetail=(item)=>{
         localStorage.setItem('item-detail',JSON.stringify(item));
         window.location.href = '/detail'
    }

    const addToCart = (item)=>{
        Axios.post(`http://localhost:4000/cart`, { item })
    }

    return(
        <div>
        <Header/>
    <Banner/>
    <HotProduct/>
    <SaleProduct/>

    <section className="banner__slide"><img src={process.env.PUBLIC_URL+'/img/banner-11140x217.png'} alt="" /></section>
    <section className="newproduct">
        <div className="newproduct__title">
            <h4>Sản phẩm mới</h4>
            <div><span className="fas fa-chevron-left"></span><span className="fas fa-chevron-right">                      </span></div>
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
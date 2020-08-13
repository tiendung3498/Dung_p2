import React,{useEffect,useState} from 'react'
import {fetchProduct,changeSort, fetchViewedUser,fetchViewed, addItemViewed} from '../../redux/action/Product'
import {fetchCart, addToCart, fetchAllOrder} from '../../redux/action/Cart'
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
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

const Home = ()=>{
    const dispatch = useDispatch();
    const listProduct = useSelector(state=>state.product.listProduct)
    const { t } = useTranslation('common');
    const users = JSON.parse(localStorage.getItem('logon'))
    const sort = useSelector(state=>state.product.sort)
    const listViewedUser = useSelector(state=>state.product.listViewedUser)
    const trentProduct = useSelector(state=>state.cart.listAllOrder)
    const [loading,setLoading] = useState(false)
    
    const loadings = ()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }
    useEffect(() => {
       loadings()
       setTimeout(() => {
           dispatch(fetchProduct(sort))
           dispatch(fetchViewed())
           dispatch(fetchCart())
           dispatch(fetchAllOrder())
           dispatch(fetchViewedUser(users.id))
       }, 700);
    }, [])
    const fetchTrentProduct = ()=>{
         let array = []
         for(let items of trentProduct){
            for (let itemss of items.item) {
                array.push(itemss)
            }
        }
        for (let i = 0; i < array.length-1; i++) {
            for (let j =i+1; j < array.length; j++){
                if(array[i].id===array[j].id){
                    array[i].count=array[i].count+array[j].count         
                    array.splice(j,1)  
                }
            }
        }
        return[...array]
    
    }
    const sortTrentProduct = array=>{
        if(array.length<5) return array.sort((a,b)=>b.count-a.count)
        else{
            array.sort((a,b)=>b.count-a.count)
            let newArray = []
            for (let index = 0; index < 4; index++) {
                newArray[index] = array[index]; 
            }
            return newArray
        }
    }


    
    const showDetail=(item)=>{
        localStorage.setItem('item-detail',JSON.stringify(item));
        window.location.href = '/detail'
         dispatch(addItemViewed(users.id,item)) 
    }

    const addItem = item=>{
        dispatch(addToCart(item,1));
        loadings()
    }

    const handleChange = event=>{
        const value = event.target.value;
        dispatch(changeSort(value));
        if(value==1) return;
        else {
            loadings()
            setTimeout(() => {
                dispatch(fetchProduct(value))
            }, 500);
        }   
    }

    if(!users){
        window.location.href = "/signin"
    }
    else if(users.role=='admin'){
        window.location.href="/admin-products"
    }
    else{
        return(
            <div>
                <Loading 
                    show = {loading}
                    color='#3fb871'
                />
                <Header />
                <Banner/>
                <section className="newproduct">
                    <ProductTitle title = {t('menu.trentproduct')}/>
                    <div className="newproduct__grid">
                        {sortTrentProduct(fetchTrentProduct()).map(item=>
                                                <Productitem data = {item}
                                                    showDetail ={()=>showDetail(item)}
                                                    
                                                    />)}
                    </div>
                </section>
                <HotProduct/>
                <SaleProduct/>
                <section className="banner__slide">
                    <img src={process.env.PUBLIC_URL+'/img/banner-11140x217.png'} alt="" />
                </section>
                <section className="newproduct">
                    <ProductTitle title = {t('menu.allproduct')}/>
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
                    {listViewedUser.map(item=><Productitem data = {item}
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
   
}
export default Home
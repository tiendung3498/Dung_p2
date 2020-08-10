import React, { useEffect, useState } from 'react'
import './Cart.css'
import CartItem from './component/CartItem'
import { useSelector, useDispatch} from 'react-redux'
import Header from '../../../src/common/Header'
import Footer from '../../../src/common/Footer'
import CartBill from './component/CartBill'
import Profile from './component/Profile'
import { fetchCartUser, fetchOrder, fetchItemOrder, addToOrder, deleteCart,fetchAllOrder } from '../../redux/action/Cart'
import { useTranslation } from 'react-i18next';
import {Tab, Tabs} from "react-bootstrap";
import ColumnOrder from './component/ColumnOrder'
import ModalOrder from './component/ModalOrder'

const Cart = ()=>{
    
    const { t } = useTranslation('common');
    const dispatch = useDispatch()
    const listCartUser = useSelector(state=>state.cart.listCartUser)
    const listOrder = useSelector(state=>state.cart.listOrder)
    const [statusOrder,setStatusOrder] = useState("chờ xác nhận")
    const [modal,setModal] =useState(false)
    const users = JSON.parse(localStorage.getItem('logon'))
    
    useEffect(() => {
        dispatch(fetchCartUser(users.id))
    }, [listCartUser])
    useEffect(() => {
        dispatch(fetchOrder(users.id))
    }, [])
    
    useEffect(() => {
        dispatch(fetchAllOrder())
    }, [])
    const show = (idOrder)=>{
         dispatch(fetchItemOrder(idOrder))
         setTimeout(() => {
            setModal(true)
         }, 500);

    }
    const hide = ()=>{
        setModal(false)
   }
    const pay = (listItem)=>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        dispatch(addToOrder(listItem,today))
        setTimeout(() => {
            dispatch(deleteCart(listCartUser))
        }, 500);
    }
    return(
        <div>
            <Header/>
            <div className="cart__title">
            </div>
            <div className="container detail_tab mt-4">
                    <Tabs defaultActiveKey="cart" id="uncontrolled-tab-example">
                        <Tab eventKey="profile" title="Thông tin của tôi">
                            <Profile/>
                        </Tab>
                        <Tab eventKey="cart" title="Giỏ hàng của tôi">
                        <div className="cart__product">
                            <CartItem  />        
                            <CartBill pay={()=>pay(listCartUser)}/>
                            </div>                             
                        </Tab>
                        <Tab eventKey="listOrder" title="Lịch sử giao dịch">
                        <table className="table">
                            <ColumnOrder/>
                            {listOrder.map(items=>
                                <tr>
                                    <td>{items.idUser}</td>
                                    <td>{items.idOrder}</td>
                                    <td>{items.time}</td>
                                    <td style={{color:"red"}}>{items.status}</td>
                                    <td><button className="btn btn-info"
                                                onClick={()=>show(items.idOrder)}>
                                                {t('order.show')}
                                        </button>
                                    </td>
                                </tr>
                        )}
                        </table>
                        <ModalOrder modal = {modal} hide = {()=>hide()}/>                          
                        </Tab>
                    </Tabs>
            </div>        
            <Footer/>
        </div>
    )
}
export default Cart
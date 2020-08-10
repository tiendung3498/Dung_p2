import React,{useState} from 'react'
import LayoutAdmin from './component/LayoutAdmin'
import ColumnOrder from '../cart/component/ColumnOrder'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllOrder,fetchItemOrder,conFirmOrder } from '../../redux/action/Cart';
import ModalOrder from '../cart/component/ModalOrder';
import RowItemOrders from './component/componenOrder/RowItemOrders';


const ListOrder = ()=>{

    const { t } = useTranslation('common');
    const dispatch = useDispatch()
    const listAllOrder = useSelector(state=>state.cart.listAllOrder)
    const [modal,setModal] =useState(false)

    
    useEffect(() => {
      dispatch(fetchAllOrder())
    },)

    const show = (idOrder)=>{
        dispatch(fetchItemOrder(idOrder))
        setTimeout(() => {
           setModal(true)
        }, 500);

   }

    const conFirms =(status,idOrder)=>{
        if(status=="đã xác nhận") return
        else dispatch(conFirmOrder(idOrder))
    }
    
    const hide = ()=>{
        setModal(false)
   }
    return(
        <LayoutAdmin>
        <div className="card-header">
            <i className="fas fa-table"/>{t('menuAdmin.tableOrder')}
        </div>
           <table className= "table">
                <ColumnOrder/>
                {
                    listAllOrder.map(items=><RowItemOrders 
                                                data = {items} 
                                                show = {()=>show(items.idOrder)} 
                                                conFirm ={()=>conFirms(items.status,items.idOrder)}/>
                )}
                <ModalOrder modal = {modal} hide = {()=>hide()}/>                          

           </table>
        </LayoutAdmin>
    )
}
export default ListOrder
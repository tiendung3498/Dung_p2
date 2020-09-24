import React,{useState,useEffect} from 'react'
import {Modal} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { useSelector} from 'react-redux'
const ModalOrder = ({modal,hide})=>{
    
    const { t } = useTranslation('common');
    const listItemOrder = useSelector(state=>state.cart.listItemOrder)
    const [totalPrice , setTotalPrice] = useState(0);
    
    useEffect(() => {
        if( listItemOrder.length >0 ){
            setTotalPrice(listItemOrder.map(x => x.price*x.count).reduce( (a,b)=> a+b));
        }else{
            setTotalPrice(0);
        }
    }, [listItemOrder]);
    return(
    <Modal show={modal} onHide={hide}>
        <Modal.Header closeButton>
            <Modal.Title>{t('order.detail')}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{'max-height': '700px', 'overflow-y': 'auto'}}>
            <table className="table">
                <tr>
                    <th>{t('order.idProduct')}</th>
                    <th>{t('order.nameProduct')}</th>
                    <th>{t('order.img')}</th>
                    <th>{t('order.price')}</th>
                    <th>{t('order.count')}</th>
                </tr>
                {listItemOrder.map(items=>
                    <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{<img src={process.env.PUBLIC_URL+items.img} alt="" />}</td>
                        <td>{items.price+".000đ"}</td>
                        <td>{items.count}</td>

                    </tr>
                )
                }               
            </table>
        </Modal.Body>
        <Modal.Footer>
                <h5>{t('cart.totalpay')} {totalPrice+(totalPrice*10/100)+".000đ"}</h5>
        </Modal.Footer>
   </Modal>                
    )
}
export default ModalOrder
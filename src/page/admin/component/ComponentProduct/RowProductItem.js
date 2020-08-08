import React, { useState } from 'react'
import Axios from 'axios'
import { changeStatusProduct } from '../../../../redux/action/Product'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const RowProductItem = ({data,editProduct})=>{
    
    const { t } = useTranslation('common');
    const dispatch = useDispatch()
    const changeStatus = (item)=>{
        dispatch(changeStatusProduct(item))
    }
    return(
        <tr>
        <td className="text-center">
            <div className="table--item content--cart"><span>{data.id}</span></div>
        </td>
        <td className="text-center">
            <img className="img-fluid" src={process.env.PUBLIC_URL+data.img} alt="product-bought"/>
        </td>
        <td className="text-center">
            <div className="table--item content--cart"><span>{data.name}</span></div>
        </td>
        <td className="text-center">
            <div className="table--item"><span>{data.price+".000đ"}</span></div>
        </td>
        <td className="text-center">
            <div className="table--item"><span>{data.del}</span></div>
        </td>
        <td className="text-center">
            <div className="table--item">
                {
                    data.status && <input type="checkbox" onChange={()=>changeStatus(data)} defaultChecked={data.status}/>
                }
                {
                    !data.status && <input type="checkbox" onChange={()=>changeStatus(data)} defaultChecked={data.status}/>
                }
            </div>
        </td>
        <td className="text-center">
            <div className="table--item">
            <button className="btn btn-warning" onClick={editProduct}>{t('role.update')}</button>
            </div>
        </td>
    </tr>
    )
}
export default RowProductItem
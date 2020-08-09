import React, { useState } from 'react'
import Axios from 'axios'
import { changeStatusUser } from '../../../../redux/action/User'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const RowUserItem = ({data,editUser})=>{
    
    const { t } = useTranslation('common');
    const dispatch = useDispatch()
    const changeStatus = (item)=>{
        dispatch(changeStatusUser(item))
    }
    return(
        <tr>
        <td className="text-center">
            <div className="table--item content--cart"><span>{data.id}</span></div>
        </td>
        <td className="text-center">
            <div className="table--item content--cart"><span>{data.name}</span></div>
        </td>
        <td className="text-center">
            <div className="table--item"><span>{data.email}</span></div>
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
        {data.role !=='admin' && 
        <td className="text-center">
            <div className="table--item">
            <button className="btn btn-warning" onClick={editUser}>{t('role.update')}</button>
            </div>
        </td>}
    </tr>
    )
}
export default RowUserItem
import React from 'react'
import { useTranslation } from 'react-i18next';

const RowItemOrders = ({data,show,conFirm})=>{

    const { t } = useTranslation('common');

    return(
        <tr>
            <td>{data.idUser}</td>
            <td>{data.idOrder}</td>
            <td>{data.time}</td>
            <td style={{color:"red"}}>{data.status}</td>
            <td>
                <button className="btn btn-info"
                    onClick={show}>
                    {t('order.show')}
                </button>
            </td>
            <td>
                {
                    data.status=='chờ xác nhận'&&
                    <button className="btn btn-success"
                        onClick={conFirm}>
                        {t('order.confirm')}
                    </button>}
            </td>
        </tr>
    )
}
export default RowItemOrders
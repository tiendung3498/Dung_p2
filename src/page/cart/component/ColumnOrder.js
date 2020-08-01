import React from 'react'
import { useTranslation } from 'react-i18next';

const ColumnOrder = ()=>{
    const { t } = useTranslation('common');

    return(
        <tr>
            <th>{t('order.idUser')}</th>
            <th>{t('order.idOrder')}</th>
            <th>{t('order.time')}</th>
            <th>{t('order.status')}</th>
        </tr>
        
    )
}
export default ColumnOrder
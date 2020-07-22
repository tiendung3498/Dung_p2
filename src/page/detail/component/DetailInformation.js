import React from 'react'
import { useTranslation } from 'react-i18next';

const DetailInformation = ()=>{
    const { t } = useTranslation('common');

    return(
        
            <div className="detail__content--information">
                <div className="detail__content--information--tab">
                    <span>{t('detail.tab1')}</span>
                    <span>{t('detail.tab2')}</span>
                    <span>{t('detail.tab3')}</span>
                </div>
                <div className="detail__content--information--content">
                    <p>{t('detail.info1')}</p>
                    <p>{t('detail.info2')}</p>
                    <p>{t('detail.info3')}</p>
                    <p>{t('detail.info4')}</p>
                    <p>{t('detail.info1')}</p>
                    <span>{t('detail.info6')}</span>
                </div>
            </div>
          
    );
}
export default DetailInformation
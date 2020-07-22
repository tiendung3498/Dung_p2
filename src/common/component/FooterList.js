import React from 'react'
import { useTranslation } from 'react-i18next';


const FooterList = ()=>{
    const { t } = useTranslation('common');

    return(
        <div className="footer__content--right">
                <div className="footer__content--right--item">
                    <h5>{t('footerlist1.title')}</h5>
                    <ul>
                        <li className="fas fa-chevron-right"> {t('footerlist1.1')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist1.2')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist1.3')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist1.4')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist1.5')}</li>
                    </ul>
                </div>
                <div className="footer__content--right--item">
                    <h5>{t('footerlist2.title')}</h5>
                    <ul>
                        <li className="fas fa-chevron-right"> {t('footerlist2.1')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist2.2')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist2.3')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist2.4')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist2.5')}</li>
                    </ul>
                </div>
                <div className="footer__content--right--item">
                    <h5>{t('footerlist3.title')}</h5>
                    <ul>
                        <li className="fas fa-chevron-right"> {t('footerlist3.1')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist3.2')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist3.3')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist3.4')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist3.5')}</li>
                    </ul>
                </div>
                <div className="footer__content--right--item">
                    <h5>{t('footerlist4.title')}</h5>
                    <ul>
                        <li className="fas fa-chevron-right"> {t('footerlist4.1')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist4.2')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist4.3')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist4.4')}</li>
                        <li className="fas fa-chevron-right"> {t('footerlist4.5')}</li>
                    </ul>
                </div>
            </div>
    );
}
export default FooterList
import React from 'react'
import { useTranslation } from 'react-i18next';

const FooterBottom = ()=>{
    const { t } = useTranslation('common');
    return(
        <div className="footer__bottom">
            <div className="footer__bottom--left">
                <ul>
                    <li>{t('footerbottom.1')}</li>
                    <li>{t('footerbottom.2')}</li>
                    <li>{t('footerbottom.3')}</li>
                    <li>{t('footerbottom.4')}</li>
                    <li>{t('footerbottom.5')}</li>
                </ul>
            </div>
            <div className="footer__bottom--right">
                <ul>
                    <li className="fab fa-cc-visa"></li>
                    <li className="fab fa-cc-mastercard"></li>
                    <li className="fab fa-cc-paypal"></li>
                    <li className="fab fa-cc-discover"></li>
                </ul>
            </div>
        </div>
    );
}
export default FooterBottom
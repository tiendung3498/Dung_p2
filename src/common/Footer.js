import React from 'react'
import FooterList from './component/FooterList'
import FooterBottom from './component/FooterBottom'
import { useTranslation } from 'react-i18next';

const Footer = ()=>{
    const { t } = useTranslation('common');
    return(
        <footer>
        <div className="footer__top">
            <div className="footer__top--left">
                <div className="footer__top--left--icon">
                    <h5>{t('footertop.1')} </h5>
                    <ul>
                        <li className="fab fa-facebook-f"></li>
                        <li className="fab fa-twitter"></li>
                        <li className="fab fa-youtube"></li>
                        <li className="fab fa-vimeo-v"></li>
                    </ul>
                </div>
                <div className="footer__top--left--email">
                    <h5>{t('footertop.2')} </h5>
                    <h5>{t('footertop.3')}</h5>
                </div>
            </div>
            <div className="footer__top--right">
                <div className="footer__top--right-input">
                    <input type="text" id="inputsignin"/>
                    <label className="fas fa-paper-plane" htmlFor="inputsignin"></label>
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer__content">
            <div className="footer__content--left">
                <img src={process.env.PUBLIC_URL+"/img/logo-footer.png"} alt=""/>
                <p>{t('footer.intro')}</p>
                <p className="fas fa-mobile-alt">{t('footer.phone')}</p>
                <p className="far fa-envelope">{t('footer.email')}</p>
            </div>
            <FooterList/>
        </div>
        <hr/>
        <FooterBottom/>
        <div className="footer__design">{t('footerbottom.design')}
           <i className="far fa-copyright"></i>
        </div>
    </footer>   
    );
}
export default Footer
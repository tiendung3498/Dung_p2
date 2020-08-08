import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterAdmin = ()=> {
    const { t } = useTranslation('common');

        return (
            <footer className="sticky-footer">
                <div className="container">
                    <div className="copyright text-center">
                      <span>{t('footerbottom.design')}</span>
                    </div>
                </div>
            </footer>
        );
    
}

export default FooterAdmin;

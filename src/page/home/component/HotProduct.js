import React  from 'react'
import { useTranslation } from 'react-i18next';

const HotProduct = ()=>{
    const { t } = useTranslation('common');
    return (
        <section className="hotproduct">
        <div className="hotproduct__title">
            <h4>{t('product.title1')}</h4>
        </div>
        <div className="hotproduct__grid">
            <div className="hotproduct__grid--big">
                <div className="hotproduct__grid--big--new">{t('product.new')}</div>
                <div className="hotproduct__grid--big--image"><img src="../img/spx2-4.png" alt="" />
                    <div></div>
                    <p><a href="#">{t('product.buy')}</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--big--title">{t('product.2')}
                    <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                </p>
                <p className="hotproduct__grid--big--price">{t('price.1')}
                    <del>{t('price.1')}</del>
                </p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-5.png" alt="" />
                    <div></div>
                    <p><a href="#">{t('product.buy')}</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">{t('product.2')}
                    <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                </p>
                <p className="hotproduct__grid--small--price">{t('price.1')}
                    <del>{t('price.1')}</del>
                </p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-6.png" alt="" />
                    <div></div>
                    <p><a href="#">{t('product.buy')}</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">{t('product.3')}
                    <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                </p>
                <p className="hotproduct__grid--small--price">{t('price.4')}
                    <del>{t('price.1')}</del>
                </p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="saleproduct__grid--right--grid--item--newred">{t('product.new')}</div>
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-5.png" alt="" />
                    <div></div>
                    <p><a href="">{t('product.buy')}</a>
                        <a className="-search fas fa-search"></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">{t('product.4')}
                    <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                </p>
                <p className="hotproduct__grid--small--price">{t('price.1')}
                    <del>{t('price.1')}</del>
                </p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--new">{t('NEW')}</div>
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-15.png" alt="" />
                    <div></div>
                    <p><a href="">{t('product.buy')}</a>
                        <a className="-search fas fa-search"></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">{t('product.4')}
                    <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                </p>
                <p className="hotproduct__grid--small--price">{t('price.2')}
                    <del>{t('price.1')}</del>
                </p>
            </div>
            <div className="hotproduct__grid--big">
                <div className="hotproduct__grid--big--newred">{t('product.new')}</div>
                <div className="hotproduct__grid--big--image"><img src="../img/spx2-3.png" alt="" />
                    <div></div>
                    <p><a href="#">{t('product.buy')}</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--big--title">{t('product.1')}
                    <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                </p>
                <p className="hotproduct__grid--big--price">{t('price.1')}
                    <del>{t('price.1')}</del>
                </p>
            </div>
        </div>
    </section>
    );
}
export default HotProduct
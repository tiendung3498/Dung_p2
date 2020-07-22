import React from 'react'
import { useTranslation } from 'react-i18next';

const News = ()=>{

    const { t } = useTranslation('common');
    return(
        <section className="news">
        <div className="news__title">
            <h4>{t('menu.news')}</h4>
            <div><span className="fas fa-chevron-left"></span><span className="fas fa-chevron-right">                      </span></div>
        </div>
        <div className="news__flex">
            <div className="news__flex--item"><img src="../img/img-news-1.png" alt="" /><span>{t('news.time')}</span>
                <h5>{t('news.title')}</h5>
                <p>{t('news.content')}</p><a href="#">{t('đọc tiếp')}</a></div>
            <div className="news__flex--item"><img src="../img/img-news-2.png" alt="" /><span>{t('news.time')}</span>
                <h5>{t('news.title')}</h5>
                <p>{t('news.content')}</p><a href="#">{t('news.read')}</a></div>
            <div className="news__flex--item"><img src="../img/img-1.png" alt="" /><span>{t('news.time')}</span>
                <h5>{t('news.title')}</h5>
                <p>{t('news.content')}</p><a href="#">{t('news.read')}</a></div>
        </div>
    </section>
    );
}
export default News
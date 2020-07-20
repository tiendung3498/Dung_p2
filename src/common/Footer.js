import React from 'react'
import FooterList from './component/FooterList'
import FooterBottom from './component/FooterBottom'
const Footer = ()=>{
    return(
        <footer>
        <div className="footer__top">
            <div className="footer__top--left">
                <div className="footer__top--left--icon">
                    <h5>KÊNH THÔNG TIN TỪ CHÚNG TÔI : </h5>
                    <ul>
                        <li className="fab fa-facebook-f"></li>
                        <li className="fab fa-twitter"></li>
                        <li className="fab fa-youtube"></li>
                        <li className="fab fa-vimeo-v"></li>
                    </ul>
                </div>
                <div className="footer__top--left--email">
                    <h5>ĐĂNG KÝ NHẬN </h5>
                    <h5>EMAIL TỪ CHÚNG TÔI</h5>
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
                <p>Green shop được thành lập từ 8/2010 được sự tin tưởng của khách hàng trong suốt thời gian hoạt động đến nay cửa hàng ngày một phát triển</p>
                <p className="fas fa-mobile-alt">Điện thoại : (84-4) 66.558.868</p>
                <p className="far fa-envelope">Email : info@dkt.com.vn</p>
            </div>
            <FooterList/>
        </div>
        <hr/>
        <FooterBottom/>
        <div className="footer__design">Thiết kế bởi Bizweb
           <i className="far fa-copyright"></i>
        </div>
    </footer>   
    );
}
export default Footer
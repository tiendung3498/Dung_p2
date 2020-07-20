import React from 'react'

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
                <div className="footer__top--right-input"><input type="text" id="inputsignin"/><label className="fas fa-paper-plane" htmlFor="inputsignin"></label></div>
            </div>
        </div>
        <hr/>
        <div className="footer__content">
            <div className="footer__content--left"><img src={process.env.PUBLIC_URL+"/img/logo-footer.png"} alt=""/>
                <p>Green shop được thành lập từ 8/2010 được sự tin tưởng của khách hàng trong suốt thời gian hoạt động đến nay cửa hàng ngày một phát triển</p>
                <p className="fas fa-mobile-alt">Điện thoại : (84-4) 66.558.868</p>
                <p className="far fa-envelope">Email : info@dkt.com.vn</p>
            </div>
            <div className="footer__content--right">
                <div className="footer__content--right--item">
                    <h5>THÔNG TIN KHÁCH HÀNG</h5>
                    <ul>
                        <li className="fas fa-chevron-right"> Tài khoản của tôi</li>
                        <li className="fas fa-chevron-right"> Sản phẩm yêu thích</li>
                        <li className="fas fa-chevron-right"> Lịch sử mua hàng</li>
                        <li className="fas fa-chevron-right"> Chính sách đổi trả</li>
                        <li className="fas fa-chevron-right"> Góp ý, khiếu nại</li>
                    </ul>
                </div>
                <div className="footer__content--right--item">
                    <h5>HỖ TRỢ DỊCH VỤ</h5>
                    <ul>
                        <li className="fas fa-chevron-right"> Hệ thống cửa hàng</li>
                        <li className="fas fa-chevron-right"> Hướng dẫn mua hàng</li>
                        <li className="fas fa-chevron-right"> Hướng dẫn thanh toán</li>
                        <li className="fas fa-chevron-right"> Tích điểm đổi quà</li>
                        <li className="fas fa-chevron-right"> Câu hỏi thường gặp</li>
                    </ul>
                </div>
                <div className="footer__content--right--item">
                    <h5>CHÍNH SÁCH ƯU ĐÃI</h5>
                    <ul>
                        <li className="fas fa-chevron-right"> Chính sách giao hàng</li>
                        <li className="fas fa-chevron-right"> Chính sách đổi trả sản phẩm</li>
                        <li className="fas fa-chevron-right"> Chính sách bảo hành</li>
                        <li className="fas fa-chevron-right"> Giới thiệu sản phẩm mới</li>
                        <li className="fas fa-chevron-right"> Chính sách trả góp</li>
                    </ul>
                </div>
                <div className="footer__content--right--item">
                    <h5>TIN TỨC</h5>
                    <ul>
                        <li className="fas fa-chevron-right"> Tin mới</li>
                        <li className="fas fa-chevron-right"> Khuyến mại</li>
                        <li className="fas fa-chevron-right"> Tuyển dụng</li>
                        <li className="fas fa-chevron-right"> Download</li>
                        <li className="fas fa-chevron-right"> Tags</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer__bottom">
            <div className="footer__bottom--left">
                <ul>
                    <li>Sitemap</li>
                    <li>Danh mục sản phẩm</li>
                    <li>Hợp tác</li>
                    <li>Thông tin liên hệ</li>
                    <li>Câu hỏi thường gặp</li>
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
        <div className="footer__design">Thiết kế bởi Bizweb <i className="far fa-copyright"></i></div>
    </footer>   
    );
}
export default Footer
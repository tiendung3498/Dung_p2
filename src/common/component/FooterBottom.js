import React from 'react'

const FooterBottom = ()=>{
    return(
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
    );
}
export default FooterBottom
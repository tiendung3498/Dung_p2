import React from 'react'

const FooterList = ()=>{
    return(
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
    );
}
export default FooterList
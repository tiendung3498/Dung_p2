import React from 'react'

const News = ()=>{
    return(
        <section className="news">
        <div className="news__title">
            <h4>Tin tức</h4>
            <div><span className="fas fa-chevron-left"></span><span className="fas fa-chevron-right">                      </span></div>
        </div>
        <div className="news__flex">
            <div className="news__flex--item"><img src="../img/img-news-1.png" alt="" /><span>Thứ 7 ,ngày 31, tháng 12, năm 2015</span>
                <h5>15 thiết kế phòng ngủ tuyệt đẹp làm vạn người mê</h5>
                <p>Cùng Sài Gòn Hoa tìm hiểu một vài xu hướng thiết kế sân vườn được ưa chuộng hiện nay nhé ! Kết hợp hàng rào</p><a href="#">đọc tiếp</a></div>
            <div className="news__flex--item"><img src="../img/img-news-2.png" alt="" /><span>Thứ 7 ,ngày 31, tháng 12, năm 2015</span>
                <h5>15 thiết kế phòng ngủ tuyệt đẹp làm vạn người mê</h5>
                <p>Cùng Sài Gòn Hoa tìm hiểu một vài xu hướng thiết kế sân vườn được ưa chuộng hiện nay nhé ! Kết hợp hàng rào</p><a href="#">đọc tiếp</a></div>
            <div className="news__flex--item"><img src="../img/img-1.png" alt="" /><span>Thứ 7 ,ngày 31, tháng 12, năm 2015</span>
                <h5>15 thiết kế phòng ngủ tuyệt đẹp làm vạn người mê</h5>
                <p>Cùng Sài Gòn Hoa tìm hiểu một vài xu hướng thiết kế sân vườn được ưa chuộng hiện nay nhé ! Kết hợp hàng rào</p><a href="#">đọc tiếp</a></div>
        </div>
    </section>
    );
}
export default News
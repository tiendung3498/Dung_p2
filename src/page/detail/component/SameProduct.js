import React from 'react'

const SameProduct = ()=>{
    return(
        <div className="detail__content--product">
        <div className="detail__content--product--item">
            <div className="detail__content--product--item--image"><img src={process.env.PUBLIC_URL+'/img/spx2-11.png'} alt="" />
                <div></div>
                <p><a href="#">Mua Ngay</a>
                    <a className="-search fas fa-search" href=""></a>
                </p>
            </div>
            <p className="detail__content--product--item--title">cây cọ nhật<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
            <p className="detail__content--product--item--price">250.000đ<del>250.000 đ</del></p>
        </div>
        <div className="detail__content--product--item">
            <div className="detail__content--product--item--image"><img src={process.env.PUBLIC_URL+'/img/spx2-11.png'} alt="" />
                <div></div>
                <p><a href="#">Mua Ngay</a>
                    <a className="-search fas fa-search" href=""></a>
                </p>
            </div>
            <p className="detail__content--product--item--title">cây hồng môn<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
            <p className="detail__content--product--item--price">250.000đ<del>250.000 đ</del></p>
        </div>
        <div className="detail__content--product--item">
            <div className="detail__content--product--item--image"><img src={process.env.PUBLIC_URL+"../img/spx2-8.png"} alt="" />
                <div></div>
                <p><a href="#">Mua Ngay</a>
                    <a className="-search fas fa-search" href=""></a>
                </p>
            </div>
            <p className="detail__content--product--item--title">cây phát lộc<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
            <p className="detail__content--product--item--price">250.000đ<del>250.000 đ</del></p>
        </div>
        <div className="detail__content--product--item">
            <div className="detail__content--product--item--image"><img src={process.env.PUBLIC_URL+"../img/spx2-12.png"} alt="" />
                <div></div>
                <p><a href="#">Mua Ngay</a>
                    <a className="-search fas fa-search" href=""></a>
                </p>
            </div>
            <p className="detail__content--product--item--title">cây kim ngân<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
            <p className="detail__content--product--item--price">250.000đ<del>250.000 đ</del></p>
        </div>
    </div>
    );
}
export default SameProduct
import React from 'react';
import './detail.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer'
import SameProduct from './component/SameProduct'
import DetailInformation from './component/DetailInformation';
const Detail = ()=>{
    let item = JSON.parse(localStorage.getItem('item-detail'));
    if(item){
        return(
            <div>
                <Header/>
                    <div className="detail__title">
                       <div>Home /
                           <a href="#">{item.name}</a>
                        </div>
                    </div>
                    <div className="detail__content">
                        <div className="detail__content--mainProduct">
                           <div className="detail__content--mainProduct--left">
                               <img className="img__main" src={process.env.PUBLIC_URL+item.img} alt="" />
                               <div className="img__more">
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-1.png'} alt="" />
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-5.png'} alt="" />
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-7.png'} alt="" />
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-10.png'} alt="" />
                                   <img src={process.env.PUBLIC_URL+'/img/spx2-14.png'} alt="" /></div>
                               </div>
                           <div className="detail__content--mainProduct--right">
                                <h3 className="name">{item.name}</h3>
                                <span className="rate">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                                <h3 className="price">{item.price}<del>{item.del}</del></h3>
                                <p className="detail__content--mainProduct--right--detail">Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt
                                 màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</p>
                                <div className="detail__content--mainProduct--right--amount">
                                   <p>Số lượng</p>
                                   <span className="sub">-</span>
                                   <span className="amount">1</span>
                                   <span className="add">+</span>
                                </div>
                                <div className="detail__content--mainProduct--right--btn">
                                    <div className="btn__group">
                                        <a className="buy" href="#">Mua ngay</a>
                                        <a className="fas fa-search" href="#"></a>
                                        <a className="item-right__btn-another -love fas fa-heart" href="#"></a>
                                    </div>
                                </div>
                                <div className="detail__content--mainProduct--right--social">
                                    <a className="fb" href="#">
                                        <i className="fab fa-facebook-square">Like</i>
                                        <span>0</span>
                                    </a>
                                    <a className="twitch" href="#">
                                        <i className="fab fa-twitter">Tweet</i>
                                    </a>
                                    <a className="gg" href="#">
                                        <i className="fab fa-google-plus-g"></i>
                                        <span>0</span>
                                    </a>
                                    <a className="share" href="#">
                                        <i className="fas fa-plus-square">Share</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <DetailInformation/>   
                        <div className="detail__content--title">
                           <h4>Sản phẩm cùng loại</h4>
                        <div>
                            <span className="fas fa-chevron-left"></span>
                            <span className="fas fa-chevron-right"></span>
                        </div>
                        </div>
                    <SameProduct/>
                    </div>
                <Footer/>
            </div>
        );
    }
    else{
        window.location.href= '/'
    }
  
}
export default Detail
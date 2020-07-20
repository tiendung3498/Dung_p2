import React  from 'react'

const HotProduct = ()=>{
    return (
        <section className="hotproduct">
        <div className="hotproduct__title">
            <h4>Sản phẩm nổi bật</h4>
        </div>
        <div className="hotproduct__grid">
            <div className="hotproduct__grid--big">
                <div className="hotproduct__grid--big--new">NEW</div>
                <div className="hotproduct__grid--big--image"><img src="../img/spx2-4.png" alt="" />
                    <div></div>
                    <p><a href="#">Mua Ngay</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--big--title">Cây chân chim<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--big--price">250.000đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-5.png" alt="" />
                    <div></div>
                    <p><a href="#">Mua Ngay</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">Cây dạ lam<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--small--price">50.000 đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-6.png" alt="" />
                    <div></div>
                    <p><a href="#">Mua Ngay</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">Cây danh dự<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--small--price">850.000 đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="saleproduct__grid--right--grid--item--newred">NEW</div>
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-5.png" alt="" />
                    <div></div>
                    <p><a href="">Mua Ngay</a>
                        <a className="-search fas fa-search"></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">Cây cọ ta<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--small--price">250.000 đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--new">NEW</div>
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-15.png" alt="" />
                    <div></div>
                    <p><a href="">Mua Ngay</a>
                        <a className="-search fas fa-search"></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">Cây dứa nhỏ<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--small--price">375.000 đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--big">
                <div className="hotproduct__grid--big--newred">NEW</div>
                <div className="hotproduct__grid--big--image"><img src="../img/spx2-3.png" alt="" />
                    <div></div>
                    <p><a href="#">Mua Ngay</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--big--title">Cây chân chim<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--big--price">250.000đ<del>250.000 đ</del></p>
            </div>
        </div>
    </section>
    );
}
export default HotProduct
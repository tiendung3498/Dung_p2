import React from 'react';
const Productitem = ({data,showDetail,addToCart})=>{
    return(
        
            <div className="hotproduct__grid--small">
            <div className="newproduct__grid--item--new">NEW</div>
            <div className="hotproduct__grid--small--image"><img src={process.env.PUBLIC_URL +data.img} alt="" />
                <div></div>
                <p><a onClick={addToCart}>Mua Ngay</a>
                    <a className="-search fas fa-search" onClick={showDetail}></a>
                </p>
            </div>
            <p className="hotproduct__grid--small--title">{data.name}<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
    <p className="hotproduct__grid--small--price">{data.price}<del>{data.del}</del></p>
        </div>
    
    );
}
export default Productitem
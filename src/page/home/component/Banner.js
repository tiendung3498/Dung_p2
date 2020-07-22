import React from 'react';
const Banner= ()=>{
    return(
        
        <section className="banner">
        <div className="banner__slides">
            <div className="banner__slides--item"><img src={process.env.PUBLIC_URL+'/img/slide-1920x590.png'} alt="" /></div>
            <div className="banner__slides--item"><img src={process.env.PUBLIC_URL+'/img/slide-1920x590.png'} alt="" /></div>
            <div className="banner__slides--item"><img src={process.env.PUBLIC_URL+'/img/slide-1920x590.png'} alt="" /></div>
        </div>
        <div className="banner__icon">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <span></span>
        </div>
     </section>
    
    );
}
export default Banner
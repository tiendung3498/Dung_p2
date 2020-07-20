import React from 'react'
import SaleProductItem from './SaleProductItem'
import SaleProductGrid from './SaleProductGrid'

const SaleProduct = ()=>{
    return(
        <section className="saleproduct">
        <div className="saleproduct__grid">
            <div className="saleproduct__grid--left">
                <div className="saleproduct__grid--left--title">
                    <h4>Sản phẩm mua nhiều</h4>
                </div>
            <SaleProductItem/>
            </div>
            <div className="saleproduct__grid--right">
                <div className="saleproduct__grid--right--title">
                    <h4>Sản phẩm khuyến mãi</h4>
                    <div>
                        <span className="fas fa-chevron-left"></span>
                        <span className="fas fa-chevron-right"></span>
                    </div>
                </div>
                <SaleProductGrid/>
            </div>
        </div>
    </section>
    );
}
export default SaleProduct
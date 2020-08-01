import React from 'react'

const ProductTitle = ({title})=>{
    return(
        <div className="newproduct__title">
                    <h4>{title}</h4>
                    <div>
                      <span className="fas fa-chevron-left"></span>
                      <span className="fas fa-chevron-right"></span>
                    </div>
                </div>
    )
}
export default ProductTitle
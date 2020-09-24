import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { changeRendirectProduct, addProduct } from '../../../../redux/action/Product'
import { useTranslation } from 'react-i18next';

const AddProduct = ()=>{
    const { t } = useTranslation('common');
    const [image,setImage] = useState(null)
    const dispatch = useDispatch()
    const names = useRef(null)
    const prices = useRef(null)
    const imgs = useRef(null)
    const listProduct = useSelector(state=>state.product.listProduct)

    const  onChangeHandler=(event)=>{
        setImage("../../../img/"+event.target.files[0].name) 
 }
    const addProducts = ()=>{
        const id = listProduct.length+1
        const name = names.current.value
        const price = prices.current.value
        const img = image
        const del = 250+".000đ"
        const status = true,
        category="1"
        const newproduct ={id,img,name,price,del,status,category}
        dispatch(addProduct(newproduct))
        dispatch(changeRendirectProduct(1))
    }
    return(
        <div className="mt-3">
        <div className="form-group">
            <label htmlFor="nameCate">{t('cart.column2')}</label>
            <input type="text" className="form-control"
                   ref={names}
                   id="nameCate"/>
        </div>
        <div className="form-group">
            <label htmlFor="nameCate">{t('cart.column3')}</label>
            <input type="number" className="form-control"
                   ref={prices}
                   id="nameCate"/>
        </div>
        <div className="form-group">
            <label htmlFor="imgProduct">{t('cart.column1')}</label>
            <img src={image} alt=""
            className="img_select"/>
            <input type="file" className="form-control"
                  ref={imgs} id="imgProduct" onChange={onChangeHandler}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={addProducts}>{t('role.add')}</button>
    </div>
    )
}
export default AddProduct
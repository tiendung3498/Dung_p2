import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProduct, changeRendirect } from '../../../../redux/action/Product'
import { useTranslation } from 'react-i18next';

const EditProduct = (data)=>{
    const { t } = useTranslation('common');
    const [img,setImg] = useState(data.data.img)
    const dispatch = useDispatch()
    const names = useRef(null)
    const prices= useRef(null)
    const images = useRef(null)
    const products = JSON.parse(localStorage.getItem('product-update'))


    const  onChangeHandler=(event)=>{
       setImg("../../../img/"+event.target.files[0].name) 
    }

    const onClickHandler = ()=>{
          const name = names.current.value
          const price = prices.current.value
          const image = img
          const id = products.id
          const del = products.del
          const update = {id:id,img:image,name:name,price:price,del:del}
          dispatch(updateProduct(id,update))
          dispatch(changeRendirect(1))
    }

    return(
    <div className="mt-3">
    <div className="form-group">
        <label htmlFor="nameCate">{t('cart.column2')}</label>
        <input type="text" className="form-control" defaultValue={data.data.name}
               ref={names}
               id="nameCate"/>
    </div>
    <div className="form-group">
        <label htmlFor="nameCate">{t('cart.column3')} </label>
        <input type="number" className="form-control" defaultValue={data.data.price}
               ref={prices}
               id="nameCate"/>
    </div>
    <div className="form-group">
        <label htmlFor="imgProduct">{t('cart.column1')} </label>
        <img src={img} alt=""
        className="img_select"/>
        <input type="file" className="form-control"
              ref={images} id="imgProduct" onChange={onChangeHandler}/>
    </div>
    <button type="button" className="btn btn-primary" onClick={onClickHandler}>{t('role.update')} </button>
</div>
  )
}
export default EditProduct
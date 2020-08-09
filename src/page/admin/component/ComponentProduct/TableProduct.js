import React from 'react'
import RowProductItem from './RowProductItem'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, changeRendirectProduct } from '../../../../redux/action/Product';
import { useTranslation } from 'react-i18next';

const TableProduct = ()=>{
    
    const { t } = useTranslation('common');
    const dispatch = useDispatch();
    const listProduct = useSelector(state=>state.product.listProduct)
    const sort = useSelector(state=>state.product.sort)

    const addProduct = ()=>{
        dispatch(changeRendirectProduct(3))

    }
    const editProduct = (item)=>{
       localStorage.setItem('product-update',JSON.stringify(item))
       dispatch(changeRendirectProduct(2))
    }

    useEffect(() => {
        dispatch(fetchProduct(sort))
    }, [])
    return(
        <div className="card mb-3 mt-4">
        <button className="btn btn-ligth text-uppercase mb-3" onClick={addProduct}>{t('role.add')}</button>
        <div className="card-header">
            <i className="fas fa-table"/>{t('menuAdmin.tableproduct')}
        </div>
        <div className="card-body">
            <div className="cart--table mb-5">
                <table className="table table-bordered table-responsive-sm">
                    <thead>
                    <tr>
                        <th className="text-uppercase text-center">{t('cart.column0')}</th>
                        <th className="text-uppercase text-center">{t('cart.column1')}</th>
                        <th className="text-uppercase text-center">{t('cart.column2')} </th>
                        <th className="text-uppercase text-center">{t('cart.column3')}</th>
                        <th className="text-uppercase text-center">{t('cart.column7')}</th> 
                        <th className="text-uppercase text-center">{t('cart.column8')}</th>
                    </tr>
                    </thead>
                   {listProduct.map(product=><RowProductItem data = {product} editProduct = {()=>editProduct(product)}/>)}
                </table>
            </div>
        </div>
    </div>
    )
}
export default TableProduct
import React from 'react'
import LayoutAdmin from './component/LayoutAdmin'
import TableProduct from './component/ComponentProduct/TableProduct'
import EditProduct from './component/ComponentProduct/EditProduct'
import { useSelector } from 'react-redux'
import AddProduct from './component/ComponentProduct/AddProduct'

const Product = ()=>{
    const rendirect = useSelector(state=>state.product.rendirect)
    console.log(rendirect)
    return(
         <LayoutAdmin>
               {rendirect==1 && <TableProduct/>}
               {rendirect===2 && <EditProduct  data = {JSON.parse(localStorage.getItem('product-update'))}/> }
               {rendirect===3 && <AddProduct/> }

         </LayoutAdmin>
    )
}
export default Product
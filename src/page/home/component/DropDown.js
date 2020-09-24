import React from 'react'
import { useTranslation } from 'react-i18next';

const DropDown = ({data,title,values,handleChange})=>{
    const { t } = useTranslation('common');

    return(
        <div className="product__sort-box">
        <p className="product__sort-title">{title}</p>
        <select
            value={values}
            onChange={handleChange}
        >
            <option value="0"> {data[0]}</option>
            <option value="1"> {data[1]}</option>
            <option value="2"> {data[2]}</option>
        </select>
    </div>
    )
}
export default DropDown
import React from 'react'

const Search = ({refs,values,searchs})=>{
    return(
        <div className="search">
        <input type="text" id="search" placeholder="Tìm theo tên..."defaultvalue ={values} onChange={(e)=>searchs(e)}ref={refs}/>
        <label className="fas fa-search" htmlFor="search"  onClick ={(e)=>searchs(e)}></label>
    </div>
    )
}
export default Search
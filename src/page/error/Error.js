import React from 'react'

const Error = ()=>{
    return(
        <div className="error">
        <img src={process.env.PUBLIC_URL+"/img/error.jpg"} style={{height:'100vh',width:'100%'}} alt=""/>
    </div>
    )
        
}
export default Error
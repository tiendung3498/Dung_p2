import React from  'react'

const ScrollTop = ({scrollToTop})=>{
    return(
        <button title='Back to top' className='scroll' 
                                    onClick={ () => { scrollToTop(); }}>
            <span className='arrow-up fas fa-chevron-up'></span>
       </button>
    )
}
export default ScrollTop
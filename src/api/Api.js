import Axios from 'axios'
export const addCartPut = async (url,data)=>{
    try {
        await Axios.put(url,data)
    } catch{
        window.location.href='/error'
       }
}
export const postData = async (url,data)=>{
    try {
        await Axios.post(url,data)
    }catch(err)  {
        // window.location.href='/error'
        console.log(err)
    }
}
export const putData = async (url,data)=>{
    try {
        await Axios.put(url,data)
    }catch(err)  {
        console.log(err)
        // window.location.href='/error'
    }
}

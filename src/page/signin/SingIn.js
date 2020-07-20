import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/action/User';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import './Signin.css'

const SignIn =()=>{

    const Users = useSelector(state=>state.user.listUser)
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    

    useEffect(() => {
       dispatch(fetchUser())
    },[]);

    const handleSubmit=()=>{
        const emails = email.current.value
        const passwords = password.current.value
        if(emails==="" || passwords===""){
            alert("bạn phải điền đầy đủ email và mật khẩu")
        }
        else{
            let findEmail = Users.find(user=>user.email==emails)
            if(findEmail){
                let findPass = Users.find(user=>user.password==passwords)
                if(findPass){
                    window.location.href="/"
                    localStorage.setItem('logon',JSON.stringify(findEmail.name))
                }
                else alert(" mật khẩu không tồn tại")
            }
            else{
                alert("email không tồn tại")
            }
        }
     }
    return(
        <div>
            <Header/>
            <div className="login__title">
               <div>Home /<a href="#">Đăng nhập</a></div>
           </div>
           <div className="login__content">
               <div className="login__content--left">
                    <h3>THÔNG TIN CÁ NHÂN</h3>
                    <div className="login__content--left--input form-group">
                       <label>Email của bạn</label>
                       <input className="form-control" ref={email} type="text" />
                    </div>
                    <div className="login__content--left--input form-group">
                      <label>Mật khẩu</label>
                      <input className="form-control" ref={password} type="password" />
                    </div>
                </div>
                <div className="login__content--right">
                  <h3>BẠN CHƯA CÓ TÀI KHOẢN</h3>
                  <p>Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! Ngoài ra còn có rất nhiều chính sách và ưu đãi cho các thành viên citybike</p>
                  <a className="login" href="#">ĐĂNG KÝ</a>
                </div>
            </div>
            <div className="login__check">
                <div>
                    <input type="text" id="check" />
                    <label htmlFor="check">Ghi nhớ tài khoản</label>
                    <a>Bạn quên mật khẩu ?</a>
                </div>
                <div onClick ={handleSubmit}> 
                   <a className="btnLogin" >Đăng nhập</a>
                </div>
            </div>
           <Footer/>
        </div>
    );
}
export default SignIn
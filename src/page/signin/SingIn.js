import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/action/User';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import './Signin.css'
import { useTranslation } from 'react-i18next';


const SignIn =()=>{

    const { t } = useTranslation('common')
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
                if(findEmail.password==passwords){
                    if(findEmail.role == 'user')
                    {
                        window.location.href="/"
                        localStorage.setItem('logon',JSON.stringify(findEmail))
                    }
                    else{
                        window.location.href="/admin-products"
                        localStorage.setItem('logon',JSON.stringify(findEmail))
                    }
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
            <div className="login__title">
               <div>{t('home.home')}<a href="#">{t('header.signin')}</a></div>
           </div>
           <div className="login__content">
               <div className="login__content--left">
                    <h3>{t('signin.info')}</h3>
                    <div className="login__content--left--input form-group">
                       <label>{t('signin.email')}</label>
                       <input className="form-control" ref={email} type="text" />
                    </div>
                    <div className="login__content--left--input form-group">
                      <label>{t('signin.pass')}</label>
                      <input className="form-control" ref={password} type="password" />
                    </div>
                </div>
                <div className="login__content--right">
                  <h3>{t('signin.noaccount')}</h3>
                  <p>{t('signin.signacc')}</p>
                  <a className="login" href="/signup">{t('header.signup')}</a>
                </div>
            </div>
            <div className="login__check">
                <div>
                    <input type="text" id="check" />
                    <label htmlFor="check">{t('signin.saveacc')}</label>
                    <a>{t('signin.forgetpass')}</a>
                </div>
                <div onClick ={handleSubmit}> 
                   <a className="btnLogin" >{t('header.signin')}</a>
                </div>
            </div>
        </div>
    );
}
export default SignIn
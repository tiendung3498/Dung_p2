import React, { useRef,useEffect } from 'react'
import './Signup.css'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux'
import { fetchUser } from '../../redux/action/User';
import { useTranslation } from 'react-i18next';

const Signup =()=>{

    const { t } = useTranslation('common');
    const urlUser = process.env.REACT_APP_USERS
    const name = useRef(null);
    const phone = useRef(null);  
    const email = useRef(null);  
    const password = useRef(null);
    const dispatch = useDispatch()  
    const users = useSelector(state=>state.user.listUser)
     
    useEffect(() => {
        dispatch(fetchUser())
     },[]);

   const handleSignup=()=>{
       const names = name.current.value;
       const phones = phone.current.value;
       const emails = email.current.value;
       const passwords =password.current.value;
       const id = users.length+1;
       if(names==""||phones == ""||emails==""||passwords==""){
           alert('bạn phải điền đầy đủ thông tin')
       }
       else{
           const newUser = {id:id,name:names,phone:phones,email:emails,password:passwords,role:'user'}
          
            axios.post(urlUser,newUser)
            setTimeout(() => {
                window.location.href = '/' 
            }, 1000);      
 
       }
   }

    return(
        <div>
                <div class="register__title">
                   <div>{t('home.home')}<a href="#">{t('header.signup')}</a></div>
                </div>
                <div class="register__content">
                    <h3>{t('signin.info')}</h3>
                    <div class="register__content--input">
                        <div class="register__content--input--text form-group">
                           <label>{t('signup.name')}<b>{t('*')}</b></label>
                           <input className="form-control" type="text" ref={name} />
                        </div>
                    <div class="register__content--input--text form-group">
                        <label>{t('signup.phone')}<b>{t('*')}</b></label>
                        <input type="text" className="form-control" ref={phone}/>
                    </div>
                </div>
                    <div class="register__content--input">
                        <div class="register__content--input--text form-group">
                           <label>{t('signup.email')}<b>{t('*')}</b></label>
                           <input type="text" className="form-control" ref={email} />
                        </div>
                        <div class="register__content--input--text form-group">
                            <label>{t('signin.pass')}<b>{t('*')}</b></label>
                            <input type="password" className="form-control" ref={password} />
                        </div>
                    </div>
                    <div class="register__content--check">
                        <input type="checkbox" id="check" />
                        <label for="check">{t('Đăng ký nhận thông tin qua email')}</label>
                    </div>
                    <div class="register__content--action">
                        <a href="/">{t('signup.back')}</a>
                        <a onClick={handleSignup}>{t('header.signup')}</a>
                    </div>
                </div>
            
        </div>
    );
}
export default Signup
import React, {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/action/User';
import { useTranslation } from 'react-i18next';

const Profile = ()=>{

    const users = JSON.parse(localStorage.getItem('logon'))
    const { t } = useTranslation('common');
    const dispatch = useDispatch() 
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)
    const phone = useRef(null)
    
    const updateUsers = (id)=>{
        const names     = name.current.value
        const emails    = email.current.value
        const phones    = phone.current.value
        const passwords = password.current.value
        if(names==""||emails==""||phones==""||passwords==""){
            alert("bạn phải điền đầy đủ thông tin")
        }
        else{
            const update = {id:id,name:names,phone:phones,email:emails,password:passwords,role:'user'}
            dispatch(updateUser(id,update))
            setTimeout(() => {
                alert("cập nhật thành công")
            }, 500);
        }
    }
    return(
        <div className="my--account ml-3 mt-4 mb-5">
        <h3 className="text-uppercase">{t('signup.info')}</h3>
        <div className="form-horizontal">
            <div className="form-group">
                <label className="control-label" htmlFor="firstName">{t('signup.name')}</label>
                <input type="text" 
                className="form-control"
                ref={name}
                defaultValue={users.name} 
                id="Name"/>
            </div>
            <div className="form-group">
                <label className="control-label" htmlFor="lastName">{t('signup.phone')}</label>
                <input type="text"
                ref={phone}
                defaultValue={users.phone}
                className="form-control"
                id="Phone"/>
            </div>
            <div className="form-group">
                <label className="control-label" htmlFor="email" >{t('signup.email')}</label>
                <input type="email"
                ref={email}
                defaultValue={users.email} 
                className="form-control"
                id="Email" />
            </div>
            <div className="form-group">
                <label className="control-label" htmlFor="email" >{t('signin.pass')}</label>
                <input type="password"
                ref={password}
                defaultValue={users.password} 
                className="form-control"
                id="Pass" />
            </div>
            {
                <button className="btn btn-success" 
                    onClick ={()=>updateUsers(users.id)}
                    >Cập nhật</button>
            }
        </div>
    </div>
    )
}
export default Profile
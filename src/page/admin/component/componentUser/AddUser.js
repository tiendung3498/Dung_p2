import React,{useRef} from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, changeRendirectUser } from '../../../../redux/action/User';


const AddUser = ()=>{
    const { t } = useTranslation('common');
    const names = useRef(null)
    const phones = useRef(null)
    const emails = useRef(null)
    const passwords =useRef(null)
    const dispatch = useDispatch()
    const listUser = useSelector(state=>state.user.listUser)

    const onClickHandler = ()=>{
        const id = listUser.length+1
        const name = names.current.value
        const phone = phones.current.value
        const email = emails.current.value
        const password = passwords.current.value
        const status = true
        const role = "user"
        const add = {id,name,phone,email,password,role,status}
        dispatch(addUser(add))
        dispatch(changeRendirectUser(1))
    }
    return(
        <div className="mt-3">
        <div className="form-group">
            <label htmlFor="nameCate">{t('signup.name')} </label>
            <input type="text" className="form-control"
                   ref={names}
                   />
        </div>
        <div className="form-group">
            <label htmlFor="nameCate">{t('signup.phone')} </label>
            <input type="text" className="form-control"
                   ref={phones}
                   />
        </div>
        <div className="form-group">
            <label htmlFor="nameCate">{t('signup.email')} </label>
            <input type="text" className="form-control"
                   ref={emails}
                   />
        </div>
        <div className="form-group">
            <label htmlFor="nameCate">{t('signin.pass')} </label>
            <input type="password" className="form-control"
                   ref={passwords}
                   />
        </div>
        <button type="button" className="btn btn-primary" onClick={onClickHandler}>{t('role.add')} </button>
    </div> 
    )

}
export default AddUser
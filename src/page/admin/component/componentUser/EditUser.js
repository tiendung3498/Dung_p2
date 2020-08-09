import React from 'react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { updateUsers, changeRendirectUser } from '../../../../redux/action/User';
import { useDispatch } from 'react-redux';

const EditUser = (data)=>{
    const { t } = useTranslation('common');
    const names = useRef(null)
    const phones = useRef(null)
    const emails = useRef(null)
    const users = JSON.parse(localStorage.getItem('user-update'))
    const dispatch = useDispatch()

    const onClickHandler = ()=>{
        const id = users.id
        const name = names.current.value
        const phone = phones.current.value
        const email = emails.current.value
        const password = users.password
        const status = users.status
        const update = {id,name,phone,email,password,status}
        dispatch(updateUsers(id,update))
        dispatch(changeRendirectUser(1))
  }
    return(
        <div className="mt-3">
        <div className="form-group">
            <label htmlFor="nameCate">{t('signup.name')} </label>
            <input type="text" className="form-control" defaultValue={data.data.name}
                   ref={names}
                   />
        </div>
        <div className="form-group">
            <label htmlFor="nameCate">{t('signup.phone')} </label>
            <input type="text" className="form-control" defaultValue={data.data.phone}
                   ref={phones}
                   />
        </div>
        <div className="form-group">
            <label htmlFor="nameCate">{t('signup.email')} </label>
            <input type="text" className="form-control" defaultValue={data.data.email}
                   ref={emails}
                   />
        </div>
        <button type="button" className="btn btn-primary" onClick={onClickHandler}>{t('role.update')} </button>
    </div>    )
}
export default EditUser
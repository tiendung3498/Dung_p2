import React from 'react'
import RowUserItem from './RowUserItem'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { fetchUser, changeRendirectUser } from '../../../../redux/action/User';

const TableUser = ()=>{
    
    const { t } = useTranslation('common');
    const dispatch = useDispatch();
    const listUser = useSelector(state=>state.user.listUser)

    const addUser = ()=>{
        dispatch(changeRendirectUser(3))

    }
    const editUser = (item)=>{
       localStorage.setItem('user-update',JSON.stringify(item))
       dispatch(changeRendirectUser(2))
    }

    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    return(
        <div className="card mb-3 mt-4">
        <button className="btn btn-ligth text-uppercase mb-3" onClick={addUser}>{t('role.addUser')}</button>
        <div className="card-header">
            <i className="fas fa-table"/>{t('menuAdmin.tableUser')}
        </div>
        <div className="card-body">
            <div className="cart--table mb-5">
                <table className="table table-bordered table-responsive-sm">
                    <thead>
                    <tr>
                        <th className="text-uppercase text-center">{t('user.id')}</th>
                        <th className="text-uppercase text-center">{t('user.name')}</th>
                        <th className="text-uppercase text-center">{t('signup.email')} </th>
                        <th className="text-uppercase text-center">{t('cart.column8')} </th>

                    </tr>
                    </thead>
                   {listUser.map(user=><RowUserItem data = {user} editUser = {()=>editUser(user)}/>)}
                </table>
            </div>
        </div>
    </div>
    )
}
export default TableUser
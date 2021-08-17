import React from 'react'
import Avatar from 'react-avatar'

import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
const Status = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div className="status my-3 d-flex">
           <Avatar name={`${auth.user.username}` } size="40"/>
            <button className="statusBtn flex-fill" onClick={()=> dispatch({type: GLOBALTYPES.STATUS,payload: true})}>
                {auth.user.username}, What are you thinking?
            </button>
        </div>
    )
}

export default Status
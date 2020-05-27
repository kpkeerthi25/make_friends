import React, { Fragment } from 'react'
import {Button} from'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {loggingOut} from '../store/action/UserAction'

const UserPage=(props)=>{
    const history=useHistory()
    const dispatch=useDispatch()
    return(
        <Fragment>
        <h1>User page</h1>
        <Button onClick={()=>{dispatch(loggingOut())}}>logout</Button>
        </Fragment>
    )
}

export default UserPage;
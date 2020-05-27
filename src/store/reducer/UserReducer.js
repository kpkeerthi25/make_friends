import {login,logout} from '../action/UserAction'
import UserPage from '../../screens/Userpage';

const initialState={
    isAuthenticated:false,
    user:{},
    token:''
}

const UserReducer=(store=initialState,action)=>{
    switch(action.type)
    {
        case login:{
            const {user,token}=action.data
            return {...store,user:user,token:token,isAuthenticated:true}
        }
        case logout:{
            return {...store,...initialState}
        }
        default:
            return store;
    }

}

export default UserReducer;
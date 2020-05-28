import {login,logout,setRooms,error} from '../action/UserAction'
import axios from 'axios'
import UserPage from '../../screens/Userpage';

const initialState={
    isAuthenticated:false,
    user:{},
    token:'',
    room:null,
    error:false
}

const UserReducer=(store=initialState,action)=>{
    switch(action.type)
    {
        case login:{
            const {user,token}=action.data;
            
            return {...store,user:user,token:token,isAuthenticated:true}
        }
        case logout:{
            
            //delete axios.defaults.headers.common['Authorization'];
            return {...store,...initialState}
        }
        case setRooms:{
            console.log(action.room)
            return{...store,room:action.room}
        }
        case error:{
            return{...store,error:true}
        }
        default:
            return store
    }

}

export default UserReducer;
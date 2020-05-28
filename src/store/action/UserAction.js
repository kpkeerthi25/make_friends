import axios from 'axios'

export const login='LOGIN'
export const logout='LOGOUT'
export const setRooms='SETROOMS'
export const error='ERROR'

export const loggingIn=(user)=>{
    return{
        type:login,
        data:user
    }
}


const loggingOut=()=>{
    return{
        type:logout,
    }
}

const handleError=()=>{
    return{
        type:error
    }
}

const settingRooms=(room)=>{
    return{
        type:setRooms,
        room:room
    }
}

export const initRooms=()=>{
    return async(dispatch)=>{
        try{
            const rooms=await axios.post('http://127.0.0.1:3001/me/myrooms')
            dispatch(settingRooms(rooms))

        }catch(e){

        }
    }
}

export const initLogout=()=>{
    return async(dispatch)=>{
        try{
            await axios.post('http://127.0.0.1:3001/me/logout')
            delete axios.defaults.headers.common['Authorization'];
            dispatch(loggingOut())

        }catch(e){
            console.log(e.response.data,'hello')
        }
    }
}
export const login='LOGIN'
export const logout='LOGOUT'

export const loggingIn=(user)=>{
    return{
        type:login,
        data:user
    }
}

export const loggingOut=()=>{
    return{
        type:logout,
    }
}

import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const UserContextProvider = createContext({})

function UserContext({children}){
    const [userInfo,setUserInfo]=useState(null)
    useEffect(()=>{
        if(!userInfo){
            axios.get('/profile').then(res=>{
                setUserInfo(res.data)
            })
        }
    })
    // useEffect(()=>{
    //     fetch('http://localhost:4000/profile',{
    //         credentials:'include'
    //     }).then(response=>{
    //         response.json().then(userInfo=>{
    //             setUserInfo(userInfo.data)
    //         })
    //     })
    // },[])

    return(
        <UserContextProvider.Provider value={{userInfo,setUserInfo,}}>
            {children}
        </UserContextProvider.Provider>          
            
    )
}

export default UserContext
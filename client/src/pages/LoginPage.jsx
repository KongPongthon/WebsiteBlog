import React, { useContext } from "react"
import { useState } from "react"
import {Link, Navigate} from "react-router-dom"
import { UserContextProvider } from "../UserContext"
import axios from "axios"


export default function LoginPage(){
    const [username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')
    const [redirect, setRedireact] = useState(false)
    const {userInfo,setUserInfo}= useContext(UserContextProvider)

    const passX = document.getElementById("password")
    const [isView,setisView] = useState(false)

    if(redirect){
        return <Navigate to={'/'}/>
    }



    async function login(ev){
        ev.preventDefault()
        const res=await axios.post('/login',{username,password})
        const {data}=res
        if(res.data === "Username and Password wrong"){
            alert('Username and Password wrong')
        } 
        else {
            alert('Login Success')
            setUserInfo(data)
            setRedireact(true)
            
        }



        // const response = await fetch('http://localhost:4000/login',{
        //     method:'POST',
        //     body: JSON.stringify({username,password}),
        //     headers:{'Content-Type':'application/json'},
        //     credentials:'include'
        // })
        // if(response.ok){
        //     response.json().then(userInfo => {
        //         setUserInfo(userInfo)
        //         setRedireact(true)
        //     })
            
        // }else alert('weong credentials')
    }



    

    

    function toggle(){
        if(passX === null){
            alert("Enter password")      
        }
        if (passX !== null) {
            if (passX.type === "password") {
                setisView(!isView)
                passX.type = "text";
            } else {                
                passX.type = "password";
                setisView(!isView)
            }
        }
    }

    


    return(

        <div className="font-sans relative w-full h-full">
            <img className="absolute top-0 w-full h-[920px] bg-center bg-cover object-cover opacity-50" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV80OF9waG90b2dyYXBoeV9vZl9ib3dsX29mX2dyb3VuZF9jb2ZmZWVfYW5kX2NvZl9kNDdlN2QwNy1kZmNhLTQzYzAtOGIyNy1lZDNmOTc2MTg5YzRfMS5qcGc.jpg"/>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative">
                <div>
                    <h2 className="font-bold text-3xl text-white">Sign <span className="bg text px-2 rounded-md">in</span></h2>
                </div>
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md sm:rounded-lg relative">
                    <form onSubmit={login}>

                        <div className="py-8">
                            <center>
                                <span className="text-2xl font-semibold">Log In</span>
                            </center>
                        </div>

                        <div>
                            <label className="block font-medium text-sm text-gray-700" />
                            <input type="username"
                                name="username"
                                placeholder="Username"
                                className="w-full rounded-md py-2.5 px-4 border text-sm " 
                                onChange={ev=>setUsername(ev.target.value)} 
                                value={username}/>                        
                        </div>


                        <div className="mt-4">
                            <div className="block font-medium text-sm text-gray-700" htmlFor="password" value="Password"/>
                            <div className="relative">
                                <input onChange={ev=>setPassword(ev.target.value)} value={password}  id="password" type="password" name="password" placeholder="Password" 
                                required autoComplete="current-password" className = 'w-full rounded-md py-2.5 px-4 border text-sm'/>

                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    <button onClick={toggle} type="button" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600">  
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">                                      
                                        {isView ? (
                                            <path d="
                                            M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,
                                            18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,
                                            0,1,1,2-2A2,2,0,0,1,12,14Z">
                                            </path>                                        
                                        ):                                        
                                        <path d="
                                        M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315
                                        3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 
                                        3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074
                                        12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 
                                        8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 
                                        1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 
                                        0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z">
                                        </path>
                                        }
                                        </svg>
                                                               
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                                <Link className="hover:underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" to="/register">
                                    Create a Blog Accounts
                                </Link>
                            <button type="submit" className = "ms-4 inline-flex items-center px-4 py-2 bg- border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                                Sign In
                            </button>

                        </div>                        
                    </form>                
                </div>
            </div>            
        </div>        
    )
}

 // <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        //         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        //     </div>
        //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        //         <form className="space-y-6" onSubmit={login}>
        //             <div>
        //                 <div className="block text-sm font-medium leading-6 text-gray-900">Username</div>
        //                 <div className="mt-2">
        //                     <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        //                     value={username} onChange={ev=>setUsername(ev.target.value)}/>
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="flex items-center justify-between">
        //                     <div className="block text-sm font-medium leading-6 text-gray-900">Password</div>
        //                     <div className="text-sm">
        //                     </div>
        //                 </div>
        //                 <div className="mt-2">
        //                     <input type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        //                     value={password} onChange={ev=>setPassword(ev.target.value)}/>
        //                 </div>
        //             </div>
        //             <div>
        //                 <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        //             </div>
        //         </form>
        //         <p className="mt-10 text-center text-sm text-gray-500">
        //         Not a member?
        //         <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register</a>
        //         </p>
        //     </div>
        // </div>
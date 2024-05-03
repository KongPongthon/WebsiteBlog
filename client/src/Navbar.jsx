import { useContext, useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import axios from "axios"
import { UserContextProvider } from './UserContext';


export default function Navbar() {
    const {userInfo,setUserInfo} = useContext(UserContextProvider)   
    const [isMenu,setIsMenu] = useState(false)

    


    // const [username,setUsername]= useState(null)
    // useEffect(()=>{
    //     fetch('http://localhost:4000/profile',{
    //         credentials:'include',
    //     }).then(res=>{
    //         res.json().then(userInfo=>{
    //             setUserInfo(userInfo)
    //         })
    //     })
    // },[])
    function logout(){
        axios.post('http://localhost:4000/logout',setUserInfo(null))
        if(!userInfo)setRedirect(true)
        
        // fetch('http://localhost:4000/logout',{
        //     credentials:'include',
        //     method:"POST",            
        // })
        // setUserInfo(null)
    }
    const username=userInfo?.username 

    
    

    const toggle = () => {
        setIsMenu(!isMenu)
    }

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,900;1,900" rel="stylesheet"/>
  <header className=' py-8 px-4 sm:px-10 font-[Jost] min-h-[70px] relative bg-[#1f1812]'>
    <div className="flex flex-wrap items-center justify-between">
      <Link to="/" className="lg:absolute max-lg:top-4 max-lg:left-10 max-sm:left-4 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
      <img src="iconP.png" alt="logo" className='w-24'/>
      </Link> 
      <div className='flex items-center ml-auto lg:order-1'>
        {username && (<>
        <button onClick={logout} className='px-4 py-2 text-lg rounded-sm font-bold text-white border-2 border-[#c59d5f] bg-[#c59d5f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#c59d5f]'>
            Logout
        </button>
        </>)}
        {!username && (<>
        <button className='mr-6 font-semibold text-lg border-none outline-none'>
            <Link to="/login" onClick={ev=>setIsMenu(false)} className='text-white hover:underline'>Login</Link>
        </button>        
        <button className='px-4 py-2 text-lg rounded-sm font-bold text-white border-2 border-[#c59d5f] bg-[#c59d5f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#c59d5f]'>
            <Link to="/register" onClick={ev=>setIsMenu(false)} >Sign up</Link>
        </button>
        </>)}        
        <button onClick={toggle} className='lg:hidden ml-7'>
          <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
        <ul className='lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
        {username && (<>
          <li className='max-lg:border-b max-lg:bg-[#c59d5f] max-lg:py-2 px-3 max-lg:rounded'>
          <Link to="/" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white max-lg:text-white block font-semibold text-lg'>Home</Link>
          </li>

          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded relative group'>
            <div className='lg:hover:text-[#c59d5f] text-white font-semibold text-lg'>Blog</div>
            <div className=" text-white min-w-[160px] bg-[#1f1812] rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[1] group-hover:block hidden absolute">
              <Link to="/cafeblog" className="block hover:text-[#c59d5f] pt-2">Cafe</Link>
              <Link to="/dessertblog" className="block hover:text-[#c59d5f] pt-2">Dessert</Link>
            </div>
          </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
          <Link to="/select" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Create Blog</Link>
          </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
          <Link to="/postAll" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Personal Blog</Link>
          </li>
        </>)}
        {!username && (<>
          <li className='max-lg:border-b max-lg:bg-[#c59d5f] max-lg:py-2 px-3 max-lg:rounded'>
          <Link to="/" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white max-lg:text-white block font-semibold text-lg'>Home</Link>
          </li>

          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded relative group'>
            <div className='lg:hover:text-[#c59d5f] text-white font-semibold text-lg'>Blog</div>
            <div className=" text-white min-w-[160px] bg-[#1f1812] rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[1] group-hover:block hidden absolute ">
              <Link to="/cafeblog" className="block hover:text-[#c59d5f] pt-2 ">Cafe</Link>
              <Link to="/dessertblog" className="block hover:text-[#c59d5f] pt-2">Dessert</Link>
            </div>
          </li>
          

          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
          <Link to="/login" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Create Blog</Link>
          </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
          <Link to="/login" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Personal Blog</Link>
          </li>
        </>)}
        </ul>
      {isMenu ? (
            <ul id="mobile-menu" className='lg:!flex lg:space-x-5 max-lg:space-y-2 lg:hidden max-lg:py-4 max-lg:w-full'>
              {username && (<>
                <li className='max-lg:border-b max-lg:bg-[#c59d5f] max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="/" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-[#c59d5f] max-lg:text-white block font-semibold text-lg'>Home</Link>
                </li>
                <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Blog</Link>
                </li>
                <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="/select" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Create Blog</Link>
                </li>
                <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="/postAll" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Personal Blog</Link>
                </li>
                </>)}
              {!username && (<>
                <li className='max-lg:border-b max-lg:bg-[#c59d5f] max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="/" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-[#c59d5f] max-lg:text-white block font-semibold text-lg'>Home</Link>
                </li>
                <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Blog</Link>
                </li>
                <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="/login" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Create Blog</Link>
                </li>
                <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="/login" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>Personal Blog</Link>
                </li>
              </>)}
            </ul>
      ) : null}       
    </div>
  </header>
  </>
  )
}



// <nav className="font-mono bg-brown">
    //     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex h-20 items-center justify-between">                 
    //                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //                         <button onClick={toggle} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
    //                         <span className="absolute -inset-0.5"></span>
    //                         <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //                         </svg>
    //                         <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //                         </svg>
    //                         </button>
    //                     </div>
    //                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //                         <div className="flex flex-shrink-0 items-center">
    //                             <img className="h-auto w-24" src="iconP.png" alt="Your Company"/>
    //                         </div>
    //                         <div className="hidden sm:ml-6 sm:block self-center">
    //                             <div className="flex space-x-4">
    //                                 {username && (
    //                                 <>
    //                                 <Link to="/" className="text-white hover:text-yellow500 rounded-md  px-3 py-2 md:text-md lg:text-2xl xl:text-3xl">Blog Review</Link>
    //                                 <Link to="/createblog" className="text-white hover:text-yellow500 rounded-md px-3 py-2 md:text-md lg:text-2xl xl:text-3xl">Create Blog</Link>
    //                                 <Link to="/postP" className="text-white hover:text-yellow500 rounded-md px-3 py-2 md:text-md lg:text-2xl xl:text-3xl">Personal Blog</Link>
    //                                 </>
    //                                 )}
    //                                 {!username && (<>
    //                                 <Link to="/" className="text-white hover:text-yellow500 rounded-md px-3 py-2 md:text-md lg:text-2xl xl:text-3xl">Blog Review</Link>
    //                                 <Link to="/login" className="text-white hover:text-yellow500 rounded-md px-3 py-2 md:text-md lg:text-2xl xl:text-3xl " >Create Blog</Link>
    //                                 <Link to="/login" className="text-white hover:text-yellow500 rounded-md px-3 py-2 md:text-md lg:text-2xl xl:text-3xl">Personal Blog</Link>
    //                                 </>)}
    //                             </div>                        
    //                         </div>                    
    //                     </div>
    //                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
    //                         {username && (
    //                         <>
    //                         <div className="flex relative ml-3">                                
    //                             <a onClick={logout} className="text-white hover:text-yellow500 rounded-md px-3 py-2 md:text-lg lg:text-xl xl:text-3xl">Logout</a>                               
    //                         </div>
    //                         </>
    //                         )}
    //                         {!username && (<>
    //                         <div className="hidden sm:ml-6 sm:block lg:flex lg:flex-1 lg:justify-end">
    //                             <Link to="/login" className="text-white hover:text-yellow500 rounded-md px-3 py-2 md:text-lg lg:text-xl xl:text-3xl">Log in <span aria-hidden="true">&rarr;</span></Link>
    //                         </div>
    //                         </>)}
    //                     </div>
    //         </div>
    //     </div>
    //     {isMenu ? (
    //     <div className="sm:hidden" id="mobile-menu">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //         {username && (<>
    //             <Link to="/" onClick={ev=>setIsMenu(false)} className="text-white hover:bg-softbrown hover:text-softgrey block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Blog Review</Link>
    //             <Link to="/createblog" onClick={ev=>setIsMenu(false)} className="text-white hover:bg-softbrown hover:text-softgrey block rounded-md px-3 py-2 text-base font-medium">Create Blog</Link>
    //             <Link to="/postP" onClick={ev=>setIsMenu(false)} className="text-white hover:bg-softbrown hover:text-softgrey block rounded-md px-3 py-2 text-base font-medium">Personal Blog</Link>
    //             <button onClick={() => [logout(),setIsMenu(false)]} className="text-white hover:bg-softbrown hover:text-softgrey block rounded-md px-3 py-2 text-base font-medium">Logout</button>

    //         </>)}
    //         {!username && (<>
    //             <Link to="/" onClick={ev=>setIsMenu(false)} className="text-white hover:bg-softbrown hover:text-softgrey block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Blog Review</Link>
    //             <Link to="/login" onClick={ev=>setIsMenu(false)} className="text-white hover:bg-softbrown hover:text-softgrey block rounded-md px-3 py-2 text-base font-medium">Create Blog</Link>
    //             <Link to="/login" onClick={ev=>setIsMenu(false)} className="text-white hover:bg-softbrown hover:text-softgrey block rounded-md px-3 py-2 text-base font-medium">Personal Blog</Link>
    //             <Link to="/login" onClick={ev=>setIsMenu(false)} className="text-white hover:bg-softbrown hover:text-softgrey block rounded-md px-3 py-2 text-base font-medium">Log in</Link>
    //         </>)}
    //         </div>
    //     </div>
    //     ) : null}
    // </nav>


{/*ยังไม่้ล็อกอิน */}
// {!username && (
//     <>
//         <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//             <span className="absolute -inset-0.5"></span>
//             <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
//             <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//             </button>
//         </div>
//         <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//                 <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-4">
//                     <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog Review</Link>
//                     <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >Create Blog</Link>
//                     <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Personal Blog</Link>
//                 </div>                        
//             </div>                    
//         </div>
//         <div className="hidden sm:ml-6 sm:block lg:flex lg:flex-1 lg:justify-end">
//             <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Log in <span aria-hidden="true">&rarr;</span></Link>
//         </div>
//     </>
// )}
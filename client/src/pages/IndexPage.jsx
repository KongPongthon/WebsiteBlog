import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";
import { UserContextProvider } from '../UserContext';
import { formatISO9075 } from 'date-fns'



export default function Homepage() {
  const [postsCa, setPostsCa] = useState('')
  const [postsDes, setPostsDes] = useState('')
  const {userInfo,setUserInfo} = useContext(UserContextProvider)
  const [isMenu,setIsMenu] = useState(false)

  useEffect(()=>{

    axios.get('/readblogca').then(res=>{
      setPostsCa(res.data)
    })
    axios.get('/readblogdes').then(res=>{
      setPostsDes(res.data)
    })
  },[])

  const username=userInfo?.username 

  function logout(){
    axios.post('http://localhost:4000/logout',setUserInfo(null))
    if(!userInfo)setRedirect(true)
  }

    
    

  const toggle = () => {
    setIsMenu(!isMenu)
  }
    return (
      
    <div className="w-full h-full">
      <img className="absolute top-0 w-full h-full bg-cover bg-center object-cover"
      src="https://c4.wallpaperflare.com/wallpaper/43/917/172/coffee-bread-cup-sugar-wallpaper-preview.jpg"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,900;1,900&family=Oswald:wght@500&family=Merriweather:ital,wght@1,700" rel="stylesheet"/>
      <header className="py-8 px-4 sm:px-10 font-[Jost] min-h-[70px]">
        <div className="flex flex-wrap items-center justify-between relative">
          <Link to="/" className="lg:absolute max-lg:top-4 max-lg:left-10 max-sm:left-4 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <img src="iconP.png" alt="logo" className='w-24' />
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
            <div className='lg:hover:text-[#c59d5f] text-white font-semibold text-lg '>Blog</div>
            <div className=" text-white min-w-[160px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[1] group-hover:block hidden absolute">
              <Link to="/cafeblog" className="block hover:text-[#c59d5f] pt-2">Cafe</Link>
              <Link to="/dessertblog" className="block hover:text-[#c59d5f] pt-2">Dessert</Link>
            </div>
            </li>


            <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
            <Link to="/select" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-white block font-semibold text-lg'>
              Create Blog
            </Link>
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
            <div className='lg:hover:text-[#c59d5f] text-white font-semibold text-lg '>Blog</div>
            <div className=" text-white min-w-[160px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[1] group-hover:block hidden absolute">
              <Link to="/cafeblog" className="block hover:text-[#c59d5f] pt-2">Cafe</Link>
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

          {/* Mobile */}
          {isMenu ? (
            <ul id="mobile-menu" className='lg:!flex lg:space-x-5 max-lg:space-y-2 lg:hidden max-lg:py-4 max-lg:w-full'>
              {username && (<>
                <li className='max-lg:border-b max-lg:bg-[#c59d5f] max-lg:py-2 px-3 max-lg:rounded'>
                <Link to="/" onClick={ev=>setIsMenu(false)} className='lg:hover:text-[#c59d5f] text-[#c59d5f] max-lg:text-white block font-semibold text-lg'>Home</Link>
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

      <div className="relative flex content-center items-center justify-center min-h-screen-75 w-full h-full">
        <div className="container relative pt-28 lg:pt-70">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 ml-auto mr-auto text-center">
              <div className="">
                <div className="text-white font-[Oswald] text-5xl">
                Cafe And Dessert
                </div>
                <p className="text-white mt-4 text-lg text-blueGray-200 font-[Merriweather]">                
                มาร่วมสัมผัสประสบการณ์ที่น่าประทับใจที่นี่ เมื่อคุณสามารถเพลิดเพลินกับสิ่งที่ดีที่สุดจากทั้งสองโลกได้! เริ่มวันของคุณด้วยแก้วกาแฟสดชื่นในคาเฟ่อบอุ่นของเรา
                แล้วมาตักเตือนตัวด้วยขนมหวานที่เรามอบให้ เสียงไหนก็ดี ไม่ว่าจะเป็นเค้กหรือขนมอ่อนอ่อน ทุกคำตัดสินใจเป็นการเดินทางสู่ความสุข มาร่วมสนุกกับความเปลี่ยนแปลงของความรู้สึกกับเราวันนี้
                </p>
              </div>
            </div>
          </div>
        </div>        
      </div>

      <div className="pb-[0.5rem]">
        <div className="flex justify-center gap-8 md:flex-row flex-col pt-20 w-full ">
          {/* <img src="image.png" className="absolute bg-center w-full h-[700px] bg-cover object-cover"/> */}
                  <div className="w-full lg:w-[32%] px-10 pt-16 pb-8 bg-white rounded-lg hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in relative group">
                      <h2
                          className="text-center font-[Merriweather] text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">
                          C a f e
                          </h2>
                      <div className="tracking-tighter block mb-14 flex justify-center">
                        <img className="h-[155px] bg-cover object-cover" 
                        src="https://i.pinimg.com/564x/72/94/20/729420448645b5fe29d622ccf94052ca.jpg"/>
                      </div>
                      <Link to="/cafeblog"><button className="font-[Oswald] w-full p-2 bg-transparent text-[#13181f] rounded-md font-semibold hover:bg-[#ff2865] hover:text-white transition-all duration-150 ease-in mb-8 border border-[#13181f]">
                        Get on the Cafe list</button></Link>
                  </div>
                  <div
                      className="w-full lg:w-[32%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in relative group">
                      <h2
                          className="text-center font-[Merriweather] text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">
                          D e s s e r t</h2>
                      <div className="tracking-tighter block mb-14 flex justify-center">
                        <img className="h-[155px] bg-cover object-cover" 
                        src="https://i.pinimg.com/564x/c9/b4/fd/c9b4fda405dfe8408c1595799b744f95.jpg"/>
                      </div>
                      <Link to="/dessertblog"><button className="font-[Oswald] w-full p-2 bg-transparent text-[#13181f] rounded-md font-semibold hover:bg-[#ff2865] hover:text-white transition-all duration-150 ease-in mb-8 border border-[#13181f]">
                        Get on the Dessert list</button></Link>
                  </div>
              </div>
      </div>
      <div className="container px-6 py-8 mx-auto">
        <hr className="my-10 border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">© Copyright 2024. All Rights Reserved.</p>
          <div className="flex mt-3 -mx-2 sm:mt-0">
            <Link to="/" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Home </Link>
            <Link to="/select" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Create </Link>
            <Link to="/postAll" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Personal Blog </Link>
          </div>
        </div>
      </div>
    </div>
    )
  }
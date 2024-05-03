import { useEffect, useState, useContext } from "react"
import { UserContextProvider } from '../UserContext';
import axios from "axios";
import { Navigate,Link } from "react-router-dom"
import { formatISO9075 } from 'date-fns'

export default function PersonalPage(){
    const {userInfo} = useContext(UserContextProvider)
    const [postsCa, setPostsCa] = useState('')
    const [postsDes, setPostsDse] = useState('')
    useEffect(()=>{
        axios.get('/readblogca').then(res=>{
            setPostsCa(res.data)
        })

        axios.get('/readblogdes').then(res=>{
            setPostsDse(res.data)
        })


    })

    if(!userInfo) return <Navigate to={'/'}/>
    return(
        <div className="container mx-auto mt-10">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,900;1,900&family=Oswald:wght@500&family=Merriweather:ital,wght@1,700" rel="stylesheet"/>
       {/* <!-- featured section --> */}
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-no-wrap space-x-0 md:space-x-6 pb-16">
        {/* <!-- main post --> */}
        <div className="w-full md:w-4/7">
            {postsCa.length <= 0 &&
            <div className="font-[Merriweather] pb-[45rem]">Cafe Blog</div>
            }
            {postsCa.length > 0 &&
            <div className="font-[Merriweather] pb-5">Cafe Blog</div>
            }
            {/* <!-- post 1 --> */}
            {postsCa.length > 0 && postsCa.map(post=>(
            <div key={post._id} className="rounded w-full flex flex-col md:flex-row mb-10">
                <Link to={`/postCa/${post._id}`}><img src={'http://localhost:4000/'+post.coverUrl} className="block md:hidden lg:block rounded-md md:h-32 m-4 md:m-0  lg:w-[256px] w-[512px] h-full object-cover bg-cover bg-center" /></Link>
                <div className="bg-white rounded px-4 w-80">
                    <Link to={`/postCa/${post._id}`}>
                    <div className="text-green-700 text-xl hidden md:block">{post.title}</div>
                    <div className="md:mt-0 text-gray-800 font-semibold text-sm mb-2 line-clamp-3">
                    <div dangerouslySetInnerHTML={{__html:post.content}}/></div></Link>
                </div>
            </div>
            ))}
        </div>
        {/* <!-- sub-main posts --> */}
        <div className="w-full md:w-4/7">
            {postsDes.length <= 0 &&
            <div className="font-[Merriweather] pb-[45rem]">Dessert Blog</div>
            }
            {postsDes.length > 0 &&
            <div className="font-[Merriweather] pb-5">Dessert Blog</div>
            }
            {/* <!-- post 1 --> */}
            {postsDes.length > 0 && postsDes.map(post=>(
            <div key={post._id} className="rounded w-full flex flex-col md:flex-row mb-10">
                <Link to={`/postDes/${post._id}`}><img src={'http://localhost:4000/'+post.coverUrl}  className="block md:hidden lg:block rounded-md md:h-32 m-4 md:m-0 lg:w-[256px] w-[512px] h-full object-cover bg-cover bg-center" /></Link>
                <div className="bg-white rounded px-4 w-80">
                    <Link to={`/postDes/${post._id}`}>
                    <div className="text-green-700 text-xl hidden md:block">{post.title}</div>
                    <div className="md:mt-0 text-gray-800 font-semibold text-sm mb-2 line-clamp-3">
                    <div dangerouslySetInnerHTML={{__html:post.content}}/></div></Link>
                </div>
            </div>
            ))}
        </div>
      </div>
      {/* <!-- end featured section --> */}
    </div>
    )
}
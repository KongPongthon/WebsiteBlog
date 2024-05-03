import React,{ useContext, useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { UserContextProvider } from '../UserContext';
import axios from "axios";
import { formatISO9075 } from 'date-fns'

export default function PostDessert() {
    const [postInfo,setPostInfo] = useState(null)
    const {userInfo}=useContext(UserContextProvider)
    const {id}=useParams()
    const [redirect, setRedirect]=useState(false)

    useEffect(()=>{
        axios.post(`/postDes/${id}`).then(res =>
        setPostInfo(res.data))
    },[id])


    async function deleteblog(){
        const cf = confirm("do you delete a blog ?")
        if(cf){
            await axios.delete(`/deleteDes/${id}`)
            setRedirect(true)
        }
    }

    if(redirect) return<Navigate to={'/postAll'}/>

    if(!postInfo) return ''
  return (
    <div className="min-h-full">
            <img className='opacity-75 w-full h-[500px] object-cover' src='https://cdn.pixabay.com/photo/2016/07/01/14/00/coffee-1491102_1280.jpg'/>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 border-solid border-1 shadow-lg">
                <div className="flex py-3 justify-between">
                    <div>ผู้เขียน : {postInfo.author.name}</div>
                    {userInfo  && (
                    <>
                    {postInfo.author._id === userInfo.id && (                  
                    <div>
                      <Link to={`/editDes/${postInfo._id}`}>Edit Post</Link>
                        <button onClick={(ev)=>deleteblog(postInfo._id)}>Deleteblog</button>
                    </div>
                    )}
                    </>
                    )}
                    <div>{formatISO9075(new Date(postInfo.createdAt))}</div>
                </div>
                <div className="">
                    <img src={'http://localhost:4000/'+postInfo.coverUrl} className="w-full h-[700px] object-cover"/>
                </div>
                <div>
                    <div> Title : {postInfo.title}</div>
                    <div> Content :<div dangerouslySetInnerHTML={{__html:postInfo.content}}></div></div>
                </div>              
            </div>
        </div>
  )
}

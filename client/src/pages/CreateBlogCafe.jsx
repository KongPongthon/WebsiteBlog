import axios from "axios"
import { useState,useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContextProvider } from '../UserContext';
import Editor from "../Editor";


export default function CreateBlog(){

    const {userInfo} = useContext(UserContextProvider)

    const [title, setTitle]= useState('')
    const [content, setContent]=useState('')
    const [files, setFiles]=useState('')
    const [redirect, setRedirect]=useState(false)

    
    
    async function createNewBlog(ev){
        ev.preventDefault()
        const data = new FormData()
        data.set('title',title)
        data.set('content',content)
        data.set('file',files[0])

        // const response = await fetch('http://localhost:4000/createblog',{
        //     method:'POST',
        //     body:data,
        //     credentials:'include',
        // })

        // if(response.ok){
        //     setRedireact(true)
        // }

        const {status} = await axios.post('/createblogcafe',data)
        if (status === 200) {setRedirect(true)}
    }

    if(redirect) return <Navigate to={'/'}/>
    if(!userInfo) return <Navigate to={'/'}/>


    return(
        <div className="bg-perlriver w-full h-full pb-[12rem]">
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 w-full h-full">
                <img className="absolute top-0 w-full h-[855px] bg-center bg-cover object-cover opacity-40" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV80OF9waG90b2dyYXBoeV9vZl9ib3dsX29mX2dyb3VuZF9jb2ZmZWVfYW5kX2NvZl9kNDdlN2QwNy1kZmNhLTQzYzAtOGIyNy1lZDNmOTc2MTg5YzRfMS5qcGc.jpg"/>
            </div>
            <div className="container mt-6 px-6 py-4 bg-white shadow-md sm:rounded-lg relative">
                Blog{""}  
                <select name="cars" id="cars">
                    <option value="cafe">Cafe</option>
                    <option value="dessert" disabled>Dessert</option>
                </select>
                {userInfo && (
                <form className="pt-10 mx-auto px-10 relative text-sm md:text-md lg:text-xl xl:text-2xl" onSubmit={createNewBlog}>                    
                <div className="flex">
                    <div className="pr-4 ">ชื่อร้าน</div>
                    <div className="pb-8">
                        <input type="text" className="shadow-md rounded-md border-0 ring-1 ring-offset-2 focus:outline-none focus:ring" 
                        value={title} onChange={ev=>setTitle(ev.target.value)}/>
                    </div>
                </div>
                <div className="flex pt-5">
                    <div className="">ภาพประกอบ</div>
                    <div className="">
                        <input type="file" onChange={ev=>setFiles(ev.target.files)}/>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="">รายละเอียด</div>
                    <div className="pb-8">
                        <div className="pt-5">
                            <Editor onChange={setContent} value={content}/>
                            {/* <textarea rows="5" className="block w-full h-32 rounded-md py-1.5 shadow-sm ring-1 ring-offset-2 focus:outline-none focus:ring"
                            value={content} onChange={ev=>setContent(ev.target.value)}/> */}
                        </div>
                    </div>
                </div>   
                <div className="flex">
                    <div className="flex col-sm-offset-2 col-sm-10 px-3">
                        <button className="shadow-xl ring-1 ring-offset-2 focus:outline-none focus:ring px-3">บันทึก</button>
                    </div>
                    <div className="flex col-sm-offset-2 col-sm-10">
                        <button className="shadow-xl ring-1 ring-offset-2 focus:outline-none focus:ring px-3">ยกเลิก</button>
                    </div>
                </div>
                </form>
                )}
            </div>
        </div>
    )
}
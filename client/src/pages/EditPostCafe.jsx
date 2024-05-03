import axios from "axios"
import { useEffect,useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import Editor from "../Editor";

export default function EditPostCafe(){
    const {id}=useParams()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedireact] = useState(false)

    useEffect(()=>{        
        axios('/postEditCa/'+id).then(res=>{
            setTitle(res.data.title)
            setContent(res.data.content)
        })
        },[])


    async function updatePost(ev){
        ev.preventDefault()
        const data = new FormData()
        data.set('title',title)
        data.set('content',content)
        data.set('id',id)
        if(files?.[0]){
            data.set('file',files?.[0])
        }
        const res = await axios.put('/putblogCa',data)

        if(res.status === 200) setRedireact(true)
        
    }
    
    

    if(redirect) return <Navigate to={'/'}/>

    return(
        <div className="bg-perlriver w-full h-full pb-[12rem]">
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 w-full h-full">
                <img className="absolute top-0 w-full h-[855px] bg-center bg-cover object-cover opacity-40" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV80OF9waG90b2dyYXBoeV9vZl9ib3dsX29mX2dyb3VuZF9jb2ZmZWVfYW5kX2NvZl9kNDdlN2QwNy1kZmNhLTQzYzAtOGIyNy1lZDNmOTc2MTg5YzRfMS5qcGc.jpg"/>
            </div>
            <div className="container mt-6 px-6 py-4 bg-white shadow-md sm:rounded-lg relative">
                <form className="pt-10 mx-auto px-10 relative text-sm md:text-md lg:text-xl xl:text-2xl" onSubmit={updatePost}>
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
                            <Editor value={content} onChange={setContent}/>
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
            </div>
        </div>
    )
}
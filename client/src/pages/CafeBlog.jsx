import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'

export default function CafeBlog() {  
  const [posts,setPosts] = useState('')

  
  useEffect(()=>{
    // axios.get('/readblogcafelast').then(res=>{
    //   setPost(res.data)
    // })
    

    axios.get('/readblogca').then(res=>{
      setPosts(res.data)
    })

    
  })  


  return (
    <div className="container mx-auto mt-10">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,900;1,900&family=Oswald:wght@500&family=Merriweather:ital,wght@1,700" rel="stylesheet"/>
      {posts.length === 0 &&
      <div className="font-[Merriweather] pb-[45rem]">Cafe Blog</div>
      }
      {posts.length > 0 && 
      <div className="font-[Merriweather] pb-5">Cafe Blog</div>
      }
      
       {/* <!-- featured section --> */}
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-no-wrap space-x-0 md:space-x-6 pb-16">
        {posts.length > 0 &&
        <>
        {/* <!-- main post --> */}
        <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
          
          <img src={'http://localhost:4000/'+posts[posts.length-1].coverUrl} className="rounded-md object-cover w-full h-64"/>
          <span className="text-green-700 text-sm hidden md:block mt-4">
            {formatISO9075(new Date(posts[posts.length-1].createdAt))}
            {/* Technology */}
            </span>
          <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            {posts[posts.length-1].title}
            {/* Ignorant branched humanity led now marianne too. */}
          </h1>
          <div className="text-gray-600 mb-4 line-clamp-5">
            <div dangerouslySetInnerHTML={{__html:posts[posts.length-1].content}}/>
            {/* Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood
            decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple
            itself.
            Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up. */}
          </div>
          <Link to={`/postCa/${posts[posts.length-1]._id}`} className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
            Read more
          </Link>
        </div>
        {/* <!-- sub-main posts --> */}
        <div className="w-full md:w-4/7">
          {/* <!-- post 1 --> */}
          {posts.length > 1 &&
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src={'http://localhost:4000/'+posts[posts.length-2].coverUrl} className="block md:hidden lg:block rounded-md md:h-32 m-4 md:m-0 w-[512px] h-full object-cover bg-cover bg-center" />
            <div className="bg-white rounded px-4 w-60">
              <span className="text-green-700 text-xl hidden md:block"> {posts[posts.length-2].title} </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-sm mb-2 line-clamp-3">
              <div dangerouslySetInnerHTML={{__html:posts[posts.length-2].content}}/>
              </div>
            </div>            
          </div>
          }

          {/* <!-- post 2 --> */}
          {posts.length > 2 &&
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src={'http://localhost:4000/'+posts[posts.length-3].coverUrl} className="block md:hidden lg:block rounded-md md:h-32 m-4 md:m-0 w-[512px] h-full object-cover bg-cover bg-center" />
            <div className="bg-white rounded px-4 w-60">
              <span className="text-green-700 text-xl hidden md:block"> Bitcoin </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-sm mb-2 line-clamp-3">
              <div dangerouslySetInnerHTML={{__html:posts[posts.length-3].content}}/>
              </div>
            </div>
          </div>
          }
          {/* <!-- post 3 --> */}
          {posts.length > 3 &&
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src={'http://localhost:4000/'+posts[posts.length-4].coverUrl} className="block md:hidden lg:block rounded-md md:h-32 m-4 md:m-0 w-[512px] h-full object-cover bg-cover bg-center" />
            <div className="bg-white rounded px-4 w-60">
              <span className="text-green-700 text-xl hidden md:block"> Insights </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-sm mb-2 line-clamp-3">
              <div dangerouslySetInnerHTML={{__html:posts[posts.length-4].content}}/>
              </div>
            </div>
          </div>
          }
          {/* <!-- post 4 --> */}
          {posts.length > 4 &&
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src={'http://localhost:4000/'+posts[posts.length-5].coverUrl} className="block md:hidden lg:block rounded-md md:h-32 m-4 md:m-0 w-[512px] h-full object-cover bg-cover bg-center" />
            <div className="bg-white rounded px-4 w-60">
              <span className="text-green-700 text-xl hidden md:block"> Insights </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-sm mb-2 line-clamp-3">
              <div dangerouslySetInnerHTML={{__html:posts[posts.length-5].content}}/>
              </div>
            </div>
          </div>
          }          
        </div>
        </>
        }
      </div>
      {/* <!-- end featured section --> */}

      {/* Page */}
      {posts.length > 5 &&
      <>
      <div className="pb-2">New Blog</div>
      {posts.map(post => (
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-no-wrap space-x-0 md:space-x-6 pb-16">
        <img src={'http://localhost:4000/'+post.coverUrl} className="rounded-md w-full h-72 object-cover bg-cover bg-center"/>
        <div className="bg-white rounded px-4 w-[1000px]">
              <span className="text-green-700 text-xl hidden md:block">{post.title}</span>
              <div className="md:mt-0 text-gray-800 font-semibold text-sm mb-2 line-clamp-6">
                <div dangerouslySetInnerHTML={{__html:post.content}}/>
              </div>
              <Link to={`/postCa/${post._id}`} className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
                Read more
              </Link>
          </div>          
      </div>
      ))}
      </>
      }
      {/* EndPage */}
    </div>
  )
}

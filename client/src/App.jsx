import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserContext from './UserContext'
import CreateBlogCafe from './pages/CreateBlogCafe'
import CreateBlogDessert from './pages/CreateBlogDessert'
import PersonalPage from './pages/PersonalPage'
import axios from 'axios'
import CafeBlog from './pages/CafeBlog'
import DessertBlog from './pages/DessertBlog'
import SelectCreate from './pages/SelectCreate'
import Postcafe from './pages/Postcafe'
import PostDessert from './pages/PostDessert'
import EditPostCafe from './pages/EditPostCafe'
import EditPostDessert from './pages/EditPostDessert'

function App() {

  axios.defaults.baseURL='http://localhost:4000'
  axios.defaults.withCredentials=true
  return (
    <UserContext>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/select" element={<SelectCreate/>}/>
        <Route path="/"element={<Layout/>}>
          <Route path="/cafeblog" element={<CafeBlog/>}/>
          <Route path="/dessertblog" element={<DessertBlog/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/postCa/:id" element={<Postcafe/>}/>
          <Route path="/postDes/:id" element={<PostDessert/>}/>
          <Route path="/postAll" element={<PersonalPage/>}/>
          <Route path="/editCa/:id" element={<EditPostCafe/>}/>
          <Route path="/editDes/:id" element={<EditPostDessert/>}/>
          <Route path="/createC" element={<CreateBlogCafe/>}/>
          <Route path="/createD" element={<CreateBlogDessert/>}/>
        </Route>
      </Routes>
    </UserContext>    
  )
}

export default App

// Main App component

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Import components
import { Home } from './components/Home'
import { useDispatch } from 'react-redux'
import { setValue } from './redux/user'

import ForgotPassword from './components/ForgotPassword'
import VerifyAccountPage from './components/VerifyAccountPage'
import LoginForm from './components/LoginForm'
import ChangePasswordForm from './components/ChangePasswordForm'
import UpdateProfileForm from './components/UpdateProfileForm'
import UploadProfilePictureForm from './components/UploadProfilePictureForm'
import MyBlogsPage from './components/MyBlogsPage'
import FavoriteBlogsPage from './components/FavoriteBlogPage'
import CreateBlogForm from './components/CreateBlogForm'
import BlogDetailPage from './components/BlogDetailPage'
import FilterAndSortBlogs from './components/FilterAndSortBlogs'
import Profile from './components/Profile'
import axios, { Axios } from 'axios'
import SelectCategory from './categories/SelectCategory'
import CategoryPage from './components/CategoryPage'
import RegisterForm from './components/RegistrationForm'
import ResetPasswordForm from './components/ResetPasswordForm'
import Navbar from './components/Navbar'

const App = () => {
  const token = localStorage.getItem("token")
  console.log(token);
  const dispatch = useDispatch();
  
  const session = async () => {
    if (token) {
      try {
        const res = await axios.get('https://minpro-blog.purwadhikabootcamp.com/api/auth/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch(setValue(res.data))
        console.log(res.data);
      } catch (error) {
        // Tangani kesalahan jika permintaan gagal
        console.error('Error fetching session:', error)
      }
    }
  }

  useEffect(() => {
    session()
  }, [])
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/verification/:token" element={<VerifyAccountPage />} />
          <Route
            path="/verification-change-email/:token"
            element={<VerifyAccountPage />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/change-password" element={<ChangePasswordForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<UpdateProfileForm />} />
          <Route
            path="/upload-profile-picture"
            element={<UploadProfilePictureForm />}
          />
          <Route path="/my-blogs" element={<MyBlogsPage />} />
          <Route path="/favorite-blogs" element={<FavoriteBlogsPage />} />
          <Route path="/create-blog" element={<CreateBlogForm />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
          <Route
            path="/filter-and-sort-blogs"
            element={<FilterAndSortBlogs />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/business" element={<SelectCategory />} />
          <Route path="/category/" element={<CategoryPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/reset-password/:resetToken" element={<ResetPasswordForm />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />


        </Routes>
      </div>
    </Router>
  )
}

export default App

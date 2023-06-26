import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setValue, logoutUser } from '../redux/user'

// Validation schema using Yup
const validationSchemaUsername = Yup.object().shape({
  newUsername: Yup.string().required('Username is required'),
})
const validationSchemaEmail = Yup.object().shape({
  newEmail: Yup.string().email('Invalid email').required('Email is required'),
})
const validationSchemaPhone = Yup.object().shape({
  newPhone: Yup.string().required('Phone number is required'),
})
const validationSchemaPassword = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one uppercase letter, one number, and one symbol'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one uppercase letter, one number, and one symbol'
    )
    .required('Confirm Password is required'),
  currentPassword: Yup.string().required('Old Password is required'),
})

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const FE_URL = 'http://localhost:3000'
  const token = localStorage.getItem('token')
  const email = useSelector((state) => state.user.value.email)
  const phone = useSelector((state) => state.user.value.phone)
  const username = useSelector((state) => state.user.value.username)

  const [show, setShow] = useState(false)
  const [image, setImage] = useState(null)

  const handleClick = () => {
    setShow(!show)
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    // Lakukan sesuatu dengan file yang dipilih
    setImage(file)
  }

  const updateImage = async () => {
    const header = {
      Authorization: `Bearer ${token}`,
    }
    const file = image
    const bodyFormData = new FormData()
    bodyFormData.append('file', file)

    const res = await axios.post(
      'https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded',
      bodyFormData,
      { headers: header }
    )

    dispatch(
      setValue({
        imgProfile: `https://minpro-blog.purwadhikabootcamp.com/${res.data.imgProfile}`,
      })
    )
  }

  const updateUsername = async (values) => {
    const header = {
      Authorization: `Bearer ${token}`,
    }

    const newUsername = values.newUsername
    console.log('newUsername:', newUsername)

    await axios.patch(
      'https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername/',
      {
        FE_URL,
        newUsername,
        currentUsername: username,
      },
      { headers: header }
    )

    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }

  const updateEmail = async (values) => {
    const header = {
      Authorization: `Bearer ${token}`,
    }

    const newEmail = values.newEmail
    console.log('newEmail:', newEmail)

    await axios.patch(
      'https://minpro-blog.purwadhikabootcamp.com/api/auth/changeEmail/',
      {
        FE_URL,
        newEmail,
        currentEmail: email,
      },
      { headers: header }
    )

    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }

  const updatePhone = async (values) => {
    const header = {
      Authorization: `Bearer ${token}`,
    }

    const newPhone = values.newPhone
    console.log('newPhone:', newPhone)

    await axios.patch(
      'https://minpro-blog.purwadhikabootcamp.com/api/auth/changePhone/',
      {
        FE_URL,
        newPhone,
        currentPhone: phone,
      },
      { headers: header }
    )

    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }

  const updatePassword = async (values) => {
    const header = {
      Authorization: `Bearer ${token}`,
    }

    const password = values.password
    const currentPassword = values.currentPassword
    const confirmPassword = values.confirmPassword
    console.log('password:', password)

    await axios.patch(
      'https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass/',
      {
        FE_URL,
        password,
        confirmPassword,
        currentPassword,
      },
      { headers: header }
    )

    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }



  return (
    <div class="bg-black text-white py-10 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-4">Profile Picture</h1>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          class="border border-red-600 rounded px-4 py-2"
        />
        <button
          onClick={updateImage}
          class="bg-red-600 text-white px-4 py-2 rounded mt-4"
        >
          Submit
        </button>
      </div>
  
      <Formik
        initialValues={{
          newUsername: '',
        }}
        validationSchema={validationSchemaUsername}
        onSubmit={updateUsername}
      >
        <Form>
          <div class="mb-8">
            <h1 class="text-4xl font-bold mb-4">Username</h1>
            <Field
              type="text"
              name="newUsername"
              placeholder={username}
              class="border border-red-600 rounded px-4 py-2"
            />
            <ErrorMessage
              name="newUsername"
              component="div"
              class="text-red-600"
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-red-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
  
      <Formik
        initialValues={{
          newEmail: '',
        }}
        validationSchema={validationSchemaEmail}
        onSubmit={updateEmail}
      >
        <Form>
          <div class="mb-8">
            <h1 class="text-4xl font-bold mb-4">Email</h1>
            <Field
              type="text"
              name="newEmail"
              placeholder={email}
              class="border border-red-600 rounded px-4 py-2"
            />
            <ErrorMessage
              name="newEmail"
              component="div"
              class="text-red-600"
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-red-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
  
      <Formik
        initialValues={{
          newPhone: '',
        }}
        validationSchema={validationSchemaPhone}
        onSubmit={updatePhone}
      >
        <Form>
          <div class="mb-8">
            <h1 class="text-4xl font-bold mb-4">Phone</h1>
            <Field
              type="text"
              name="newPhone"
              placeholder={phone}
              class="border border-red-600 rounded px-4 py-2"
            />
            <ErrorMessage
              name="newPhone"
              component="div"
              class="text-red-600"
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-red-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
  
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
          currentPassword: '',
        }}
        validationSchema={validationSchemaPassword}
        onSubmit={updatePassword}
      >
        <Form>
          <div class="mb-8">
            <h1 class="text-4xl font-bold mb-4">Password</h1>
            <div>
              <label for="currentPassword">Old Password</label>
              <Field
                type="password"
                name="currentPassword"
                class="border border-red-600 rounded px-4 py-2"
              />
              <ErrorMessage
                name="currentPassword"
                component="div"
                class="text-red-600"
              />
            </div>
            <div>
              <label for="password">New Password</label>
              <Field
                type="password"
                name="password"
                class="border border-red-600 rounded px-4 py-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                class="text-red-600"
              />
            </div>
            <div>
              <label for="confirmPassword">Confirm New Password</label>
              <Field
                type="password"
                name="confirmPassword"
                class="border border-red-600 rounded px-4 py-2"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                class="text-red-600"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="bg-red-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  </div>
  
  )
}

export default Profile

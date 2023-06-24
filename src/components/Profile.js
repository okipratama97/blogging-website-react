import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setValue } from '../redux/user'

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
    <div>
      <div mt="20px">
        <div>
          <label htmlFor="file">Profile Picture</label>
          <input
            type="file"
            id="file"
            h="29px"
            w="620px"
            color="#FF4C29"
            size="s"
            borderRadius="5px"
            onChange={handleFileChange}
          />
        </div>
        <button mt="30px" h="30px" w="90px" onClick={updateImage}>
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
        <Form className="text-green">
          <div>
            <label htmlFor="newUsername">Username</label>
            <Field type="text" name="newUsername" placeholder={username} />
            <ErrorMessage name="newUsername" component="div" />
          </div>
          <div>
            <button type="submit" mt="8px" h="35px" w="150px">
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
        <Form className="text-green">
          <div>
            <label htmlFor="newEmail">Email</label>
            <Field type="text" name="newEmail" placeholder={email} />
            <ErrorMessage name="newEmail" component="div" />
          </div>
          <div>
            <button type="submit" mt="8px" h="35px" w="150px">
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
        <Form className="text-green">
          <div>
            <label htmlFor="newPhone">Phone</label>
            <Field type="text" name="newPhone" placeholder={phone} />
            <ErrorMessage name="newPhone" component="div" />
          </div>
          <div>
            <button type="submit" mt="8px" h="35px" w="150px">
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
        <Form className="text-green">
          <div>
            <label htmlFor="currentPassword">Old Password</label>
            <Field type="password" name="currentPassword" />
            <ErrorMessage name="currentPassword" component="div" />
          </div>
          <div>
            <label htmlFor="password">New Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <div>
            <button type="submit" mt="8px" h="35px" w="150px">
              Submit
            </button>
          </div>
        </Form>
      </Formik>

      {/* <form mt="20px">
        <div>
          <label>Password</label>
          <div>
            <input
              name="currentPassword"
              type={show ? 'text' : 'password'}
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="Current password"
            />
            <button onClick={handleClick} variant="none" mt="10px">
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          <div>
            <input
              name="password"
              type={show ? 'text' : 'password'}
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="New password"
            />
            <button onClick={handleClick} variant="none" mt="10px">
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          <div>
            <input
              name="confirmPassword"
              type={show ? 'text' : 'password'}
              h="35px"
              w="300px"
              color="#FF4C29"
              placeholder="Confirm new password"
            />
            <button onClick={handleClick} variant="none" mt="10px">
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" mt="8px" h="35px" w="150px">
            Submit
          </button>
        </div>
      </form> */}
    </div>
  )
}

export default Profile

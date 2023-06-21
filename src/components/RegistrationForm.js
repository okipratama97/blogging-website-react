// Register form
// Using Formik and Yup validator for input user data

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'Password must contain at least one uppercase letter, one number, and one symbol')
    .required('Password is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
});

const RegisterForm = () => {
  // Handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    // Perform registration logic, e.g., send data to the server
    console.log(values);

    // Reset form fields and set submitting state
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          phoneNumber: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='text-green'>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

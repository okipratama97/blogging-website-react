// Login form
// Using Formik and Yup validator for input user data

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  emailOrUsernameOrPhone: Yup.string().required('Email/Username/Phone is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  // Handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    // Perform login logic, e.g., send data to the server
    console.log(values);

    // Reset form fields and set submitting state
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          emailOrUsernameOrPhone: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="emailOrUsernameOrPhone">Email/Username/Phone</label>
            <Field type="text" name="emailOrUsernameOrPhone" />
            <ErrorMessage name="emailOrUsernameOrPhone" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

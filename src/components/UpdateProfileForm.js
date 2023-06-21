// Update Profile form
// Using Formik and Yup validator for input user data

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
});

const UpdateProfileForm = () => {
  // Handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    // Perform update profile logic, e.g., send data to the server
    console.log(values);

    // Reset form fields and set submitting state
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          phoneNumber: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
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
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>
          <div>
            <button type="submit">Update Profile</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateProfileForm;

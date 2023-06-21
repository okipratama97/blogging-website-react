// Reset Password form
// Using Formik and Yup validator for input user data

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ResetPasswordForm = () => {
  // Handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    // Perform reset password logic, e.g., send data to the server
    console.log(values);

    // Reset form fields and set submitting state
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <button type="submit">Reset Password</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;

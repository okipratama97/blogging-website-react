// Change Password form
// Using Formik and Yup validator for input user data

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old password is required'),
  newPassword: Yup.string()
    .min(6, 'New password must be at least 6 characters')
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'New password must contain at least one uppercase letter, one number, and one symbol')
    .required('New password is required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm new password is required'),
});

const ChangePasswordForm = () => {
  // Handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    // Perform change password logic, e.g., send data to the server
    console.log(values);

    // Reset form fields and set submitting state
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Change Password</h2>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="oldPassword">Old Password</label>
            <Field type="password" name="oldPassword" />
            <ErrorMessage name="oldPassword" component="div" />
          </div>
          <div>
            <label htmlFor="newPassword">New Password</label>
            <Field type="password" name="newPassword" />
            <ErrorMessage name="newPassword" component="div" />
          </div>
          <div>
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <Field type="password" name="confirmNewPassword" />
            <ErrorMessage name="confirmNewPassword" component="div" />
          </div>
          <div>
            <button type="submit">Change Password</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePasswordForm;

// Create Blog form
// Using Formik and Yup validator for input user data

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  publicationDate: Yup.date().required('Publication date is required'),
  image: Yup.string().required('Image is required'),
  category: Yup.string().required('Category is required'),
  content: Yup.string().required('Content is required'),
  video: Yup.string().url('Invalid URL').required('Video is required'),
  keywords: Yup.string().required('Keywords are required'),
});

const CreateBlogForm = () => {
  // Handle form submission
  const onSubmit = (values, { setSubmitting }) => {
    // Perform create blog logic, e.g., send data to the server
    console.log(values);

    // Reset form fields and set submitting state
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <Formik
        initialValues={{
          title: '',
          author: '',
          publicationDate: '',
          image: '',
          category: '',
          content: '',
          video: '',
          keywords: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field type="date" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <Field type="text" name="image" />
            <ErrorMessage name="image" component="div" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <Field type="text" name="category" />
            <ErrorMessage name="category" component="div" />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <Field as="textarea" name="content" />
            <ErrorMessage name="content" component="div" />
          </div>
          <div>
            <label htmlFor="video">Video</label>
            <Field type="text" name="video" />
            <ErrorMessage name="video" component="div" />
          </div>
          <div>
            <label htmlFor="keywords">Keywords</label>
            <Field type="text" name="keywords" />
            <ErrorMessage name="keywords" component="div" />
          </div>
          <div>
            <button type="submit">Create Blog</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateBlogForm;

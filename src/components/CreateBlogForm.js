import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BlogData = () => {
  const [category, setCategory] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const BlogSchema = Yup.object().shape({
    title: Yup.string().required("Please fill in your blog title"),
    keywords: Yup.string().required("Please fill in your keywords"),
    CategoryId: Yup.string().required("Please select a category"),
    content: Yup.string().required("Please enter your content"),
  });

  const fetchCategories = async (data) => {
    try {
      const response = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory", data
      );
      setCategory(response.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  


  const createBlog = async (values) => {
    try {
      const formData = new FormData();
      const { title, keywords, country, CategoryId, url, content } = values;
      formData.append("data", JSON.stringify({title, keywords, country, CategoryId, url, content})) //use stryngify
      formData.append("file", selectedFile);

      const response = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data;
      console.log(data);
      // Navigate or perform other actions
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Formik
      initialValues={{
        title: "",
        keywords: "",
        country: "",
        CategoryId: "",
        url: "",
        content: "",
        file: null,
      }}
      validationSchema={BlogSchema}
      onSubmit={createBlog}
    >
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>
        <div>
          <label htmlFor="keywords">Keywords</label>
          <Field type="text" name="keywords" />
          <ErrorMessage name="keywords" component="div" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <Field type="text" name="country" />
          <ErrorMessage name="country" component="div" />
        </div>
        <div>
          <label htmlFor="CategoryId">Category</label>
          <Field as="select" name="CategoryId">
            <option value="">Select category</option>
            {category.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="CategoryId" component="div" />
        </div>
        <div>
          <label htmlFor="file">Image</label>
          <Field
            type="file"
            name="file"
            onChange={(event) => setSelectedFile(event.target.files[0])}
          />
          <ErrorMessage name="file" component="div" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <Field as="textarea" name="content" />
          <ErrorMessage name="content" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BlogData;

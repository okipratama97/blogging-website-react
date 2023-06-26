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

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createBlog = async (values) => {
    try {
      const formData = new FormData();
      const { title, keywords, country, CategoryId, url, content } = values;
      formData.append("data", JSON.stringify({ title, keywords, country, CategoryId, url, content }));
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
    <div className="flex justify-center items-center h-screen bg-black">
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
        <Form className="bg-black rounded-lg shadow-lg p-8 text-white w-96">
          <h2 className="text-3xl font-bold mb-6">Create Blog</h2>
          <div className="mb-4">
            <label htmlFor="title" className="text-lg">
              Title
            </label>
            <Field
              type="text"
              name="title"
              className="w-full bg-gray-800 rounded py-2 px-4 mt-2 text-white"
            />
            <ErrorMessage name="title" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="keywords" className="text-lg">
              Keywords
            </label>
            <Field
              type="text"
              name="keywords"
              className="w-full bg-gray-800 rounded py-2 px-4 mt-2 text-white"
            />
            <ErrorMessage name="keywords" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="text-lg">
              Country
            </label>
            <Field
              type="text"
              name="country"
              className="w-full bg-gray-800 rounded py-2 px-4 mt-2 text-white"
            />
            <ErrorMessage name="country" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="CategoryId" className="text-lg">
              Category
            </label>
            <Field
              as="select"
              name="CategoryId"
              className="w-full bg-gray-800 rounded py-2 px-4 mt-2 text-white"
            >
              <option value="">Select category</option>
              {category.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="CategoryId" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="text-lg">
              Image
            </label>
            <Field
              type="file"
              name="file"
              className="w-full mt-2"
              onChange={(event) => setSelectedFile(event.target.files[0])}
            />
            <ErrorMessage name="file" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="text-lg">
              Content
            </label>
            <Field
              as="textarea"
              name="content"
              className="w-full bg-gray-800 rounded py-2 px-4 mt-2 text-white"
            />
            <ErrorMessage name="content" component="div" className="text-red-500" />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BlogData;

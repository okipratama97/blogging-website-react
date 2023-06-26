import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setValue } from "../redux/user";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      navigate("/");
    }
  }, []);

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const email = values.email;
      const password = values.password;
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("res:", res.data);

      localStorage.setItem("token", res.data.token);

      dispatch(setValue(res.data.isAccountExist));

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    navigate("/reset-password");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h2 className="text-3xl font-bold mb-8">Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col items-start">
          <div className="mb-4">
            <label htmlFor="email" className="font-semibold mr-10">
              Email
            </label>
            <Field
              type="text"
              name="email"
              className="px-4 py-2 rounded-md bg-gray-800 text-white w-72"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="font-semibold mr-2">
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="px-4 py-2 rounded-md bg-gray-800 text-white w-72"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-red-700 transition"
            >
              Login
            </button>
          </div>
          <a
            href="http://localhost:3000/forgot-password"
            className="text-gray-400 hover:text-gray-200"
          >
            Forgot Password
          </a>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

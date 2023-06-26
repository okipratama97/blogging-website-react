import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const { resetToken } = useParams();

  const ResetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
  });

  const onReset = async (data) => {
    try {
      const FE_URL = "http://localhost:3000";
      const payload = {
        ...data,
        FE_URL
      };
      const response = await axios.put(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/forgotPass",
        payload,  {
          headers: {
              "Authorization": `Bearer ${resetToken}`
          }
      });
      setSuccess(true);
      console.log(response);
    } catch (err) {
      setSuccess(false);
      console.log(err)
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-md p-8 bg-gray-800 rounded-md shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Forgot Password</h2>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ResetSchema}
          onSubmit={(values, actions) => {
            onReset(values);
            actions.resetForm();
            setSuccess(true);
          }}
        >
          <Form>
            {success && <p className="text-green-400 mb-4"
            >
              We'll send you an email to change your password</p>}
            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 rounded-md bg-gray-900 text-white"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition"
              >
                Submit
              </button>
            </div>
            <a href="http://localhost:3000/login" className="block mt-4 text-sm text-gray-500 underline">Back to login</a>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;

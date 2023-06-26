import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordForm = () => {
  const resetToken = useParams();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  console.log(resetToken);

  const PasswordResetSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must contain at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Please confirm your password"),
  });

  const PassReset = async (data) => {
    try {
      console.log(data);
      const response = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/resetPass",
        data,
        {
          headers: {
            Authorization: `Bearer ${resetToken}`,
          },
        }
      );
      setSuccess(true);
      navigate("/");
      console.log(response);
    } catch (err) {
      console.log(err);
      setSuccess(false);
      // alert(err.response.data)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-md p-8 bg-gray-800 rounded-md shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Reset Your Password</h1>
        <p className="text-gray-300 mb-6">Enter your new password</p>
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={PasswordResetSchema}
          onSubmit={(values, actions) => {
            PassReset(values);
            if (success) {
              actions.resetForm();
            }
          }}
        >
          <Form>
            <div className="mb-4">
              <Field
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white"
              />
              <div className="relative">
                <button
                  type="button"
                  onClick={handleClick}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <Field
                type={show ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter your password"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white"
              />
              <div className="relative">
                <button
                  type="button"
                  onClick={handleClick}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300"
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

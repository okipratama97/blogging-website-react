import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordForm = () => {
    const token = localStorage.getItem("token");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  console.log(token);

  const PasswordResetSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password contains minimal 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password did not match")
      .required("Please confirm your password"),
  });

  const PassReset = async (data) => {
    try {
      console.log(data);
      const response = await axios.patch('https://minpro-blog.purwadhikabootcamp.com/api/auth/resetPass', data, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
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
        <div>
          <h1>Reset your password</h1>
          <p>Enter your new password</p>
        </div>
        <div>
          <Field
            type={show ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
          />
          <button type="button" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </button>
          <ErrorMessage name="password" component="div" />
        </div>
        <div>
          <Field
            type={show ? "text" : "password"}
            name="confirmPassword"
            placeholder="Re-enter your password"
          />
          <button type="button" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </button>
          <ErrorMessage name="confirmPassword" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm
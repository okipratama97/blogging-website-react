import { Formik } from "formik";
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
    <Formik
      initialValues={{ email: "" }}
      validationSchema={ResetSchema}
      onSubmit={(values, actions) => {
        actions.preventDefault(); // Menambahkan preventDefault
        onReset(values);
        if (success) {
          actions.resetForm();
        }
      }}
    >
      <Formik
        initialValues={{ email: "" }}
        validationSchema={ResetSchema}
        onSubmit={(values, actions) => {
          onReset(values);
          actions.resetForm();
          setSuccess(true);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            {success && <p>We'll send you an email to change your password</p>}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {props.errors.email && props.touched.email && (
                <div>{props.errors.email}</div>
              )}
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
            <a href="http://localhost:3000/login">Back to login</a>
          </form>
        )}
      </Formik>
    </Formik>
  );
};

export default ForgotPassword;

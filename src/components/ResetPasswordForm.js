import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

const ResetPasswordForm = () => {
  const [success, setSuccess] = useState(false);

  const ResetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
  });

  const onReset = async (data) => {
    try {
      const response = await axios.put(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/forgotPass",
        data
      );
      setSuccess(true);
      console.log(response);
    } catch (err) {
      setSuccess(false);
      alert(err.response.data);
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
  initialValues={{ email: '' }}
  validationSchema={ResetSchema}
  onSubmit={(values, actions) => {
    onReset(values);
    actions.resetForm();
    setSuccess(true);
  }}
>
  {(props) => (
    <form onSubmit={props.handleSubmit}>
      {success && (
        <p>We'll send you an email to change your password</p>
      )}
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

export default ResetPasswordForm;

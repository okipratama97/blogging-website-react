import { EmailIcon } from "@chakra-ui/icons";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [success, setSuccess] = useState(false);

  const ResetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
  });

  const onReset = async (data) => {
    try {
      const response = await axios.patch(
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
        onReset(values);
        if (success) {
          actions.resetForm();
        }
      }}
    >
      <Form>
        <div>
          <h2>Reset your password</h2>
          <p>We'll send you an email to change your password</p>
        </div>
        <div>
          <Link to="/login">Already have an account?</Link>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <EmailIcon />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ResetPassword;

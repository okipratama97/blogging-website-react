import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        'Password must contain at least one uppercase letter, one number, and one symbol'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        'Password must contain at least one uppercase letter, one number, and one symbol'
      )
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });

  const onRegister = async (values) => {
    try {
      const username = values.username;
      const email = values.email;
      const password = values.password;
      const phone = values.phoneNumber;
      const confirmPassword = values.confirmPassword;
      const FE_URL = 'http://localhost:3000';

      await axios.post('https://minpro-blog.purwadhikabootcamp.com/api/auth/', {
        username,
        email,
        password,
        phone,
        confirmPassword,
        FE_URL,
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-md p-8 bg-gray-800 rounded-md shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            phoneNumber: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onRegister}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="text-lg font-semibold">
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 mt-2 rounded-md bg-gray-900 text-white"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <Field
                type="email"
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
            <div className="mb-4">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 rounded-md bg-gray-900 text-white"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="text-lg font-semibold">
                Phone Number
              </label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-4 py-2 mt-2 rounded-md bg-gray-900 text-white"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="text-lg font-semibold"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-4 py-2 mt-2 rounded-md bg-gray-900 text-white"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition"
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;

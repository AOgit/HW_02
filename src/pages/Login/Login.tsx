
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, 'Too Long!'),
});

interface Credentials {
  email: string;
  password: string;
}



export const Login = () => {
  const [message, setMessage] = useState("");

  async function fetchLogin(credentials: Credentials){
  const res = await fetch ("https://api.escuelajs.co/api/v1/auth/login", 
    {
      method: "POST",
      headers: {"Content-Type": "Application/JSON"},
      body: JSON.stringify(credentials)
    });
    if (res.ok) {
      setMessage("Successfully login")
    }
}

return (
  <div>
    <div>{message ? message : null}</div>
    <h1>Sign in</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      
      onSubmit={values => {
        fetchLogin(values)
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label>Email:</label>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <label>Password:</label>
          <Field name="password" type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

};

export default Login;
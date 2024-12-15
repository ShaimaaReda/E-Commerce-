import React from "react";
import { Formik, Form, useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Register() {
  // const signUp = (obj) => {
  //   console.log("obj", obj);
  //   axios
  //     .get(`https://ecommerce.routemisr.com/api/v1/auth/signup`, obj)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };
  async function signUp (obj) {
    const option ={
      URL :'https://ecommerce.routemisr.com/api/v1/auth/signup',
      method : 'POST',
    } 
  }
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => signUp(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className="container mx-auto my-8">
            <label for="name">name:</label>
            <input
              className="mt-2 border shadow rounded w-full py-2 px-3"
              type="string"
              name="name"
              placeholder="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label for="email">email:</label>
            <input
              className="mt-2 border shadow rounded w-full py-2 px-3"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label for="password">password:</label>
            <input
              className="mt-2 border shadow rounded w-full py-2 px-3"
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <label for="rePassword">rePassword:</label>
            <input
              className="mt-2 border shadow rounded w-full py-2 px-3"
              type="password"
              name="rePassword"
              placeholder="rePassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rePassword}
            />
            <label for="phone">phone:</label>
            <input
              className="mt-2 border shadow rounded w-full py-2 px-3"
              type="number"
              name="phone"
              placeholder="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <button
              className="bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

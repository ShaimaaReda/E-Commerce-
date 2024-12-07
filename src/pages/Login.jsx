import React from "react";
import { Formik, Form, useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  return (
    <>
      <Formik
        initialValues={{email:'',  password:''}}
        // onSubmit={()}
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
        <Form>
            <label for='email' >email:</label>
            <input
            className="shadow rounded w-full py-2 px-3"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />
            <label for='password' >password:</label>
            <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </Form>
       )}
      </Formik>
    </>
  )
}
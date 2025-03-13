import { Field, Formik, Form } from "formik";
// import React from "react";
import s from "./RegisterPage.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div className={s.div}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formWrapper}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              type="text"
              name="name"
              className={s.input}
              placeholder="Enter name"
              style={{ color: "rgb(54, 32, 4)" }}
            />
          </label>
          <label className={s.label}>
            <span>Email</span>
            <Field
              type="text"
              name="email"
              className={s.input}
              placeholder="Enter email"
              style={{ color: "rgb(54, 32, 4)" }}
            />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field
              type="password"
              name="password"
              className={s.input}
              placeholder="Enter password"
              style={{ color: "rgb(54, 32, 4)" }}
            />
          </label>
          <button type="submit" className={s.button}>
            Register
          </button>
          <p className={s.text}>
            Do you have an account?{" "}
            <Link className={s.link} to="/login">
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;

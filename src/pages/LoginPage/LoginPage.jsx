import { Field, Formik, Form } from "formik";
// import React from "react";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { Toaster, toast } from "react-hot-toast";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.email}`, { duration: 4000 });
        setTimeout(() => navigate("/phoneBook", { replace: true }), 2000);
      })
      .catch(() => toast.error("Invalid data!"));
    options.resetForm();
  };
  return (
    <div className={s.div}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formWrapper}>
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
              placeholder="Enter email"
              style={{ color: "rgb(54, 32, 4)" }}
            />
          </label>
          <button type="submit" className={s.button}>
            Login
          </button>
          <p className={s.text}>
            No account yet?{" "}
            <Link to="/register" className={s.link}>
              Register
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;

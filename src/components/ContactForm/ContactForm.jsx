import { Formik, Field, Form, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: crypto.randomUUID(),
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={s.div}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.formWrapper}>
          <label className={s.label} htmlFor="name">
            Name
          </label>
          <Field type="text" className={s.input} name="name" />
          <ErrorMessage name="name" component="span" className={s.error} />
          <label className={s.label} htmlFor="number">
            Number
          </label>
          <Field type="text" className={s.input} name="number" />
          <ErrorMessage name="number" component="span" className={s.error} />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

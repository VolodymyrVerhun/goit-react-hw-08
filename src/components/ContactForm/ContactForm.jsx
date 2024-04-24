import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import style from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d+$/, "Phone number must be only digits")
    .min(8, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};
export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    dispatch(addContact(data));
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={FormSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>Name</label>
        <Field className={style.input} type="text" name="name" />
        <ErrorMessage className={style.error} name="name" component="span" />
        <label className={style.label}>Number</label>
        <Field className={style.input} type="tel" name="number" />
        <ErrorMessage className={style.error} name="number" component="span" />
        <button className={style.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

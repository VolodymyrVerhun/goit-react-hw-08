import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import style from "./RegistrationForm.module.css";

import { register } from "../../redux/auth/operations";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required(),

  password: Yup.string()

    .min(7, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    dispatch(register(data));

    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={FormSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>User Name</label>
        <Field className={style.input} type="text" name="name" />
        <ErrorMessage className={style.error} name="name" component="span" />

        <label className={style.label}>Email</label>
        <Field className={style.input} type="email" name="email" />
        <ErrorMessage className={style.error} name="email" component="span" />

        <label className={style.label}>Password</label>
        <Field className={style.input} type="password" name="password" />
        <ErrorMessage
          className={style.error}
          name="password"
          component="span"
        />

        <button className={style.btn} type="submit">
          Register User
        </button>
      </Form>
    </Formik>
  );
}

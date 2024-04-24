import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import style from "./LoginForm.module.css";

import { login } from "../../redux/auth/operations";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required(),

  password: Yup.string()

    .min(7, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};
export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    dispatch(login(data));
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={FormSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
}

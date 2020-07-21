import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from "formik";

const Login = ({errors, touched }) => {
  return (
    <div>
      <Form>
        <p>Вход</p>
        <div className='fields'>
          <label htmlFor="name">Почта</label>
          <Field name="email" type="text" />
        </div>
        {touched.email && errors.email && <div className="errors">{errors.email}</div>}
        <div className='fields'>
          <label htmlFor="name">Пароль</label>
          <Field name="password" type="text" />
        </div>
        {touched.password && errors.password && <div className="errors">{errors.password}</div>}
      </Form>
    </div>
  );
};


const validatedLogin = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    };
  },
  validationSchema:yup.object({
    email: yup
      .string()
      .email("Не правильно введен электронный адрес")
      .required("Поле обязательное"),
    password: yup
      .string()
      .min(8, "Пароль должен быть длиною не менее 8 символов")
      .max(16, "Пароль не должен привышать длину в 16 символов")
      .required("Поле обязательное"),
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    console.log(values);
    setSubmitting(false);
    resetForm();
  }
})(Login);

Login.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default validatedLogin;
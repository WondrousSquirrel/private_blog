import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { withFormik, Form, Field } from "formik";

import { loginRequest } from '../../actions/userActions';



const Login = ({errors, touched }) => {
  return (
    <div className='auth'>
      <Form className='loginForm'>
        <p className='authTitle'>Вход</p>
        <div className='fields'>
          <label htmlFor="name">Почта</label>
          <Field name="email" type="text" />
        </div>
        {touched.email && errors.email && <div className="errors">{errors.email}</div>}
        <div className='fields'>
          <label htmlFor="name">Пароль</label>
          <Field name="password" type="password" />
        </div>
        {touched.password && errors.password && <div className="errors">{errors.password}</div>}
        <Button type="submit" variant="primary"size="lg" className="authButton">
          Войти
        </Button>
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
    const user = {
      email: values.email,
      password: values.password
    };

    props.loginRequest(user);
    setSubmitting(false);
    resetForm();
  }
})(Login);

const mapDispatchToProps = dispatch => ({
  loginRequest: user => {
    dispatch(loginRequest(user));
  },
});

const SignInWrapper = connect(
  null,
  mapDispatchToProps
)(validatedLogin);

Login.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default SignInWrapper;
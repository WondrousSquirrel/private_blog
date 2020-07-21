import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import { Button } from 'react-bootstrap';
import { registerRequest } from '../../actions/userActions';

const Register = ({ errors, touched }) => {
  return (
    <div className='auth'>
      <Form className='registerForm'>
        <p className='authTitle'>Регистрация</p>
        <div className="fields">
          <label htmlFor="name">Имя</label>
          <Field name="name" type="text" />
        </div>
        {touched.name && errors.name && <div className="errors">{errors.name}</div>}
        <div className="fields">
          <label htmlFor="email">Электроный адрес</label>
          <Field name="email" type="text" />
        </div>
        {touched.email && errors.email && <div className="errors">{errors.email}</div>}
        <div className="fields">
          <label htmlFor="password">Пароль</label>
          <Field name="password" type="password" />
        </div>
        {touched.password && errors.password && <div className="errors">{errors.password}</div>}
        <div className="fields">
          <label htmlFor="rePassword">Повторите пароль</label>
          <Field name="rePassword" type="password" />
        </div>
        {touched.rePassword && errors.rePassword &&
          <div className="errors">{errors.rePassword}</div>}
        <Button type="submit" variant="primary"size="lg" className="authButton">
          Регистрация
        </Button>
      </Form>
    </div>
  );
};


const validatedRegister = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    };
  },
  validationSchema:yup.object({
    name: yup
      .string()
      .max(20, "Имя должно быть длиною в 20 символов или меньше")
      .required("Поле обязательное"),
    email: yup
      .string()
      .email("Не правильно введен электронный адрес")
      .required("Поле обязательное"),
    password: yup
      .string()
      .min(8, "Пароль должен быть длиною не менее 8 символов")
      .max(16, "Пароль не должен привышать длину в 16 символов")
      .required("Поле обязательное"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Пароли не совпадают")
      .required("Поле обязательное"),
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    props.registerRequest(newUser);
    setSubmitting(false);
    resetForm();
  },
})(Register);

const mapDispatchToProps = (dispatch) => ({
  registerRequest: (user) => {
    dispatch(registerRequest(user));
  },
});

const SingUpWrapper = connect(
  null,
  mapDispatchToProps
)(validatedRegister);

Register.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default SingUpWrapper;
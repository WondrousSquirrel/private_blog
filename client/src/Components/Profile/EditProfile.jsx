import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import { Button } from 'react-bootstrap';
import Cookie from 'js-cookie';
import { Link } from 'react-router';
import { registerRequest } from '../../actions/userActions';

const loadedUser = Cookie.getJSON('user_data');

const EditUserForm = ({ errors, touched, history }) => {
  return (
    <div className='auth'>
      <Form className='registerForm'>
        <p className='profile-form-title'>Редактирование профиля</p>
        <div className="fields">
          <label htmlFor="name">Имя</label>
          <Field name="name" type="text" placeholder={loadedUser.name}/>
        </div>
        {touched.name && errors.name && <div className="errors">{errors.name}</div>}
        <div className="fields">
          <label htmlFor="email">Электроный адрес</label>
          <Field name="email" type="text" placeholder={loadedUser.email}/>
        </div>
        {touched.email && errors.email && <div className="errors">{errors.email}</div>}
        <div className="fields">
          <label htmlFor="password">Пароль</label>
          <Field name="password" type="password" />
        </div>
        {touched.password && errors.password && <div className="errors">{errors.password}</div>}
        <Button type="submit" variant="primary"size="lg" className="authButton">
          Изменить
        </Button>
      </Form>
    </div>
  );
};


const validaterEditProfile = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
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
      .required("Поле обязательное")
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    setSubmitting(false);
    resetForm();
  },
})(EditUserForm);

const mapDispatchToProps = dispatch => ({
});

const EditForm = connect(
  null,
  mapDispatchToProps
)(validaterEditProfile);

EditUserForm.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default EditForm;
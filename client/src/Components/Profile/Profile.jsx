import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { AiOutlineIdcard, AiOutlineMail, AiOutlineKey } from 'react-icons/ai';
import PropTypes from 'prop-types';

import avatar from './avatar.png';
import { getUserRequest } from '../../actions/userActions';

const Profile = (props) => {

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    props.getUserRequest();
  }, [props.getUserRequest]);

  const editOnClick = () => {
    setIsEdit(!isEdit);
  };

  return <div className='profile-wrapper'>
    <div className="profile">
      <div className="avatar-wrapper">
        <img src={avatar} className='profile-avatar'/>
      </div>
      <div className="profile-buttons">
        <Button className='edit-profile-button' onClick={editOnClick}>
          {isEdit ? 'Сохранить' : 'Редактировать'}</Button>
        <Button className='delete-user-button'>Удалить</Button>
      </div>
      <div className="profile-content">
        <p><AiOutlineIdcard /> {props.user.name}</p>
        <p><AiOutlineMail /> {props.user.email}</p>
        <p><AiOutlineKey /> 
          {props.user.haveAccess ? 'Открытый доступ' : 'Ждет одобрение администратора'}</p>
        {props.user.isAdmin ? <Button className='admin-button'>Админка</Button>: ''}
      </div>
    </div>
  </div>;
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUserRequest: () => {
    dispatch(getUserRequest());
  },
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  getUserRequest: PropTypes.object.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineIdcard, AiOutlineMail, AiOutlineKey } from 'react-icons/ai';
import PropTypes from 'prop-types';

import avatar from './avatar.png';
import { getUserRequest, deleteUserRequest } from '../../actions/userActions';
import EditForm from './EditProfile';

const Profile = (props) => {

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    props.getUserRequest();
  }, [props.getUserRequest]);

  const editOnClick = () => {
    setIsEdit(!isEdit);
  };

  const deleteUser = () => {
    props.deleteUserRequest()
  }

  const user = props.user;

  return <div className='profile-wrapper'>
    <div className="profile">
      <div className="avatar-wrapper">
        <img src={avatar} className='profile-avatar' />
      </div>
      <div className="profile-buttons">
        <Button className='edit-profile-button' as={Link} to='edit'>
          Редактировать</Button>
        <Button className='delete-user-button' onClick={deleteUser}>Удалить</Button>
      </div>
      <div className="profile-content">
        <p><AiOutlineIdcard /> {user.name}</p>
        <p><AiOutlineMail /> {user.email}</p>
        <p><AiOutlineKey />
          {user.haveAccess ? ' Открытый доступ' : ' Ждет одобрение администратора'}</p>
        {user.isAdmin ? <Button className='admin-button'>Админка</Button> : ''}
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
  deleteUserRequest: () => {
    dispatch(deleteUserRequest());
  }
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  getUserRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
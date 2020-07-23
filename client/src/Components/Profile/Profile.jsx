import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import avatar from './avatar.png';
import { getUserRequest } from '../../actions/userActions';

const Profile = (props) => {

  useEffect(() => {
    props.getUserRequest();
  }, [props.getUserRequest]);

  return <div className='profile-wrapper'>
    <div className="profile">
      <div className="avatar-wrapper">
        <img src={avatar} className='profile-avatar'/>
      </div>
      <div className="profile-buttons">
        <Button className='edit-profile-button'>Редактировать</Button>
        <Button className='delete-user-button'>Удалить</Button>
      </div>
      <p>{props.user.name}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
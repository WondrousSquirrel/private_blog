import React from 'react';
import { Button } from 'react-bootstrap';

import avatar from './avatar.png';

const Profile = () => <div className='profile-wrapper'>
  <div className="profile">
    <div className="avatar-wrapper">
      <img src={avatar} className='profile-avatar'/>
    </div>
    <div className="profile-buttons">
      <Button className='edit-profile-button'>Редактировать</Button>
      <Button className='delete-user-button'>Удалить</Button>
    </div> 
  </div>
</div>;

export default Profile;
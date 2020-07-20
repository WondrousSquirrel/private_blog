import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const Notification = ({ notification }) => {

  const style = notification.message ? {display: 'flex'} : {display: 'none'};
  // fca4a4 cc8a8a
  const color = notification.type === 'fail' ?
    { backgroundColor: '#cc8a8a'} : { backgroundColor: 'green'};
  return (
    <div className='notification' style={style} >
      <div className='notificationBody' style={color}><p>{notification.message}</p></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notification: state.notification
});

export default connect(
  mapStateToProps,
  null
)(Notification);

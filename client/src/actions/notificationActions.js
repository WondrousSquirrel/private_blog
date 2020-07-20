import { NOTIFICATION_OPEN, NOTIFICATION_CLOSE } from "../types/types";

export const requestFailedNotifications = message => ({
  type: NOTIFICATION_OPEN,
  payload: {
    type: 'fail',
    message: message
  }
});

export const closeNotification = () => ({
  type: NOTIFICATION_CLOSE
});
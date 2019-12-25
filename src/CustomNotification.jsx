import React from 'react';

const CustomNotification = ({id, dismissAlert}) => {
  return (<>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Notification sent for {id}</strong>
      <button type="button" className="close" onClick={e => dismissAlert()} aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </>);
}

export default CustomNotification;
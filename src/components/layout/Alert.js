import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`notification is-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
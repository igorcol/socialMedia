import React from 'react';

import './styles.css';

function User({user}) {
  return (
    <>
    <div className="userContainer">
      <div className="userProfileImgContainer">
          <img src={user.image} className="userImg" />
          {
            user.online ? 
              <span className="onlineBadge"/> 
            : {}
          }
      </div>
      <span className="userName">{user.name}</span>
    </div>
    </>
  );
};

export default User;

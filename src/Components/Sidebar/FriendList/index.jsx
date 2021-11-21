import React from 'react';
import './styles.css';

import Friends from '../../../ApiFetch'

function FriendList() {
  return (

    <ul className="sidebarFriendList">
      {
        Friends.map(friend => 
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={friend.image}/>
            <span className="friendName">{friend.name}</span>
          </li>  
        )
      }
    </ul>

  );
};

export default FriendList;

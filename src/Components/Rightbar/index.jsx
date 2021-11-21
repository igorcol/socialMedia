import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Friends from '../../ApiFetch';
import User from '../assets/User';

import './styles.css';

function Rightbar() {

  const [onlineFriends, setOnlineFriends] = useState([])

  useEffect(() => {
    setOnlineFriends(Friends.filter(friend => friend.online))
  }, Friends)

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" className="birthdayImg" />
          <span className="birthdayText"><b>Igor Costa Colombini</b> e mais <b>3 amigos</b> fazem aniversário hoje.</span>
        </div>
      </div>

      <img src="assets/ad.png" className="rightbarAd" />

      <h4 className="rightbarTitle">Amigos Online</h4>
      <ul className="rightbarFriendList">
          {
            onlineFriends.map(friend =>
              <li className="rightbarFriend">
                  <User user={friend} />
              </li>
            )
          }
      </ul>

    </div>
  );
};

export default Rightbar;

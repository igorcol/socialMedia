import React from 'react';
import './styles.css';

import { Search, Person, Chat, Notifications } from '@material-ui/icons'

function Topbar() {
  return (
    <div className="topbar-container">

      <div className="topbarLeft">
        <span className="logo">RedeSocial</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Procure por amigos, páginas ou vídeos" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">

        <div className="topbarLinks">
          <span className="topbarLink">Início</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>

            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
        </div>

        <img src="/assets/person/2.jpeg" alt="" className="topbarImg" />

      </div>

    </div>
  );
};

export default Topbar;

import React from 'react';
import './styles.css';

import { 
  RssFeed, 
  Chat, 
  PlayCircleFilled,
  Group,
  Bookmarks,
  Work,
  Event,
  School
} from '@material-ui/icons'
import FriendList from './FriendList';
import Button from '../assets/Button';

const sidebarItems = [
  {
    title: "Feed",
    icon: RssFeed
  },
  {
    title: "Chats",
    icon: Chat,
  },
  {
    title: "Videos",
    icon: PlayCircleFilled,
  },
  {
    title: "Grupos",
    icon: Group
  },
  {
    title: "Salvos",
    icon: Bookmarks
  },
  {
    title: "Trabalhos",
    icon: Work
  },
  {
    title: "Eventos",
    icon: Event
  },
  {
    title: "Cursos",
    icon: School
  }
]


function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebarWrapper">

        <ul className="sidebarList">
          {
            sidebarItems.map(item => 
              <li className="sidebarListItem" key={item.title}>
                <item.icon className="sidebarIcon"/>
                <span className="sidebarListItemText">{item.title}</span>
              </li> 
            )
          }
        </ul>
        <Button text="Mostrar Mais"/>
        <hr/>
        <FriendList/>
        
      </div>

    </div>
  );
};

export default Sidebar;

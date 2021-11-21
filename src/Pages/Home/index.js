import React from 'react';
import './styles.css';

import Topbar from '../../Components/Topbar';
import Sidebar from '../../Components/Sidebar'
import Feed from '../../Components/Feed'
import Rightbar from '../../Components/Rightbar'


function Home() {
  return (
    <>
      <Topbar/>
      <div className="home-container">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
};

export default Home;

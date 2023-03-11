import React from 'react';
import './SideNav.css';
import {HiHome, HiCalendar} from 'react-icons/hi';
import {ImCheckboxChecked} from 'react-icons/im';
import {MdEngineering} from 'react-icons/md';

const SideNav = () => {
  return (
    <div className='sideNav'>
        <div><HiHome size='30'/> <span>Overview</span></div>
        <div><HiCalendar size='30'/> <span>Calendar</span></div>
        <div><ImCheckboxChecked size='25'/> <span>All Tasks</span></div>
        <div><MdEngineering size='30'/> <span>About Developer</span></div>
    </div>
  )
}

export default SideNav;

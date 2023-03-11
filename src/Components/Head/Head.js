import React from 'react';
import './Head.css';

const Head = () => {
  return (
    <div className='head'>
        {/* title of app "FocusDoList" */}
        <div className='title'>
            <span className='title-focus'>Focus</span><span className='title-do'>Do</span><span className='title-list'>List</span>
        </div>

        {/* header nav; contains "Today", "Upcoming" & "Anytime" options */}
        <div className='headNav'>
            <span>Today</span>
            <span>Upcoming</span>
            <span>Anytime</span>
        </div>
        
    </div>
  )
}

export default Head;

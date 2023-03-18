import React from 'react';
import Todo from './Content/Todo/Todo';
import Milestones from './Content/Milestones/Milestones';
import AddButton from './Content/AddButton/AddButton';
import Pinned from './Content/Pinned/Pinned';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
        <div className='left'>
            <Todo/>
            <Milestones/>
        </div>
        <div className='right'>
            <AddButton/>
            <Pinned/>
        </div>
    </div>
  )
}

export default Main;

import React from 'react';
import './Todo.css';

const Todo = ({className}) => {

  const todoList = [
    {
      id: 1,
      isComplete: false,
      time: '07:00',
      color: 'red',
      data: 'Study for the Physics test'
    },
    {
      id: 2,
      isComplete: false,
      time: '08:30',
      color: 'blue',
      data: 'Deploy the todo'
    },
    {
      id: 3,
      isComplete: false,
      time: '10:50',
      color: 'green',
      data: 'Read pdf'
    },
    {
      id: 4,
      isComplete: false,
      time: '13:40',
      color: 'yellow',
      data: 'Buy dog food'
    },
    {
      id: 5,
      isComplete: false,
      time: '17:20',
      color: 'pink',
      data: 'Complete Queue data structure'
    }
  ];

  return (
    <div className={`todo ${className}`}>
      <h1>Today</h1>
      <hr></hr>
      <div>
        <ul>
          {
            todoList.map(item => {
              return(
                <li key={item.id}>
                  <span className='time' style={{display: 'inline-block'}}>{item.time}</span>
                  <div className='dataContainer'>
                    <span style={{display: 'inline-block', backgroundColor: `${item.color}`}} className='verticalSpan'></span>
                    <span style={{display: 'inline-block'}}>{item.data}</span>
                    <input type='checkbox'/>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo;
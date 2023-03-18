import React from 'react';
import './AddButton.css'

const AddButton = ({className}) => {
  return (
    <div className={`addButton ${className}`} style={{backgroundColor: 'orange'}}>
      <span>Add</span>
    </div>
  )
}

export default AddButton

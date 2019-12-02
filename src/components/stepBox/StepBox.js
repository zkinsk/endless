import React from 'react';

import './stepbox.css'

export default function StepBox(props) {
  return (
    <div className='stepBox'>
      <div className = 'stepNumber'>
        <h1>{'0' + props.step.stepNumber.toString()}</h1>
      </div>
      <h5>{props.step.title.toUpperCase()}</h5>
      <p>{props.step.body}</p>
    </div>
  )
}
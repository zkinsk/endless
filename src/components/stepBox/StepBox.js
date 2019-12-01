import React from 'react';

import './stepbox.css'

export default function StepBox(props) {
  return (
    <div className='stepBox'>
      {console.log(props)}
      <div className = 'stepNumber'>
        <h1>{'0' + props.step.stepNumber}</h1>
      </div>
      <h4>{props.step.title}</h4>
      <p>{props.step.body}</p>
    </div>
  )
}
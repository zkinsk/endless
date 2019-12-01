import React from 'react';

import './stepbox.css'

export default function StepBox(props) {
  return (
    <div className='stepBox'>
      {/* {console.log(props)} */}
      <div className = 'stepNumber'>
        <h1>{'0' + props.step.stepNumber}</h1>
      </div>
      <h5>{props.step.title.toUpperCase()}</h5>
      <p>{props.step.body}</p>
    </div>
  )
}
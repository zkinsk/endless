import React from 'react';

import './hiw.css'

import StepBox from '../stepBox/StepBox'

export default function HowItWorksBox(props) {
  return (
    <div className="hIwBox">
      <div className="hIwHeader">
        <h2>How It Works</h2>
      </div>
      <div className="hIwSteps">
        {props.steps.map(step =>
          <StepBox key={step.id} step={step} />
        )}
      </div>
    </div>
  )
}
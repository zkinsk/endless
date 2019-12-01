import React from 'react';
import './button.css'

export default function Button(props) {
  return (
  <button className='startButton' onClick = {props.buttonClick}>{props.children}</button>
  )
}
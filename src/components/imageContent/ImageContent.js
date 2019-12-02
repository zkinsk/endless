import React from 'react';
import './imageContent.css';

import Button from '../Button/Button'

export default function ImageContent(props) {

  return (
    <>
      <div className="plax"></div> {/* fixed position div to contain the "parallax" content */}
      <div className='imageBackground'>
        <div className='textContent'>
          <p>New Games &amp; Accessories</p>

          <h1>
            Monthly packages.
          <br />
            Excitement delivered daily.
        </h1>

          <p>
            What's the best way to shop for the latest video games
            and peripherals? How about never shopping at all?
          <br />
            You'll get new stuff on your doorstep &#8212; every month.
        </p>
          <Button buttonClick={props.buttonClick}>GET STARTED</Button>
        </div>
      </div>
    </>
  )
}

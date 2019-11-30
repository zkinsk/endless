import React from 'react';

import { ReactComponent as Logo } from './logo-endless.svg' //logo import

import './header.css';

function Header (){
  return(
    <header className='header'>
      <Logo/>
    </header>
  )
}

export default Header
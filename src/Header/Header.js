import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <header className='Header'>
      <h1>{props.header}</h1>
    </header>
  )
}
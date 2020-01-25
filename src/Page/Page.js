import React from 'react';
import './Page.css';

export default function Page(props) {
  // will need the handleTurn function passed down
  return (
    <div className='outerDiv'>
      <div data-page-number='1'>
        {/* <textarea className='pageBody'></textarea> */}
        <input type='text' className='pageBody' name='lineOne' id='lineOne' />
        <input type='text' className='pageBody' name='lineTwo' id='lineTwo' />
      </div>
    </div>
  )
}
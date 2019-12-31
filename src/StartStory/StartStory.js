import React from 'react';

export default function StartStory(props) {
  return (
    <button id='startStory' onClick={() => props.handleStart()}>
      StartStory
    </button>
  )
}
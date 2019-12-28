import React from 'react';
import './PlayerList.css';

export default function PlayerList(props) {
  const players = props.playerList.map((item, idx) => 
    <li key={idx} >{item}</li>
  );
  return (
    <div className='PlayerList'>
      <h3>Players</h3>
      <ol>
        {players}
      </ol>
    </div>
  )
}
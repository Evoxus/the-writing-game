import React from 'react';
import PlayerList from '../PlayerList/PlayerList';
import './Page.css';

export default function Page(props) {
  return (
    <div className='flexContainer'>
      <form className="outerDiv" id='storyForm' onSubmit={(e) => props.handleTurn(e)}>
        <div>
          <input type='text' className='pageBody' name='lineOne' id='lineOne' />
          <input type='text' className='pageBody' name='lineTwo' id='lineTwo' />
        </div>
        {/* two input boxes instead of text area? could get around mobile limitation */}
        {/* <textarea row='2' col='66' className='pageBody' form='storyForm' id='storyInput' 
          name='storyInput' defaultValue={props.story.length >= 1 ? props.story[props.story.length - 1] : ''}>
        </textarea> */}
        <button type='submit' id='endTurn'>End your turn</button>
      </form>
      <PlayerList playerList={props.playerList} />
    </div>
  )
}
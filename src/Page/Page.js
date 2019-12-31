import React from 'react';
import PlayerList from '../PlayerList/PlayerList';
import './Page.css';

export default function Page(props) {
  return (
    <div className='flexContainer'>
    <form className="outerDiv" id='storyForm'>
      <div data-page-number="1">
        {props.story.length && <p>{props.story[props.story.length][1]}</p>}
        {/* two input boxes instead of text area? could get around mobile limitation */}
        <textarea className='pageBody' form='storyForm' id='storyInput' name='storyInput'>
        </textarea>
      </div>
      <button type='submit' id='endTurn' onClick={(e) => props.handleTurn(e)}>End your turn</button>
    </form>
    <PlayerList playerList={props.playerList}/>
    </div>
    
  )
}
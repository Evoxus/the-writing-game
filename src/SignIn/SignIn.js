import React from 'react';
import StartStory from '../StartStory/StartStory';
import PlayerList from '../PlayerList/PlayerList';
import './SignIn.css';

export default function SignIn(props) {
  return (
    <section className='SignIn'>
      <h2>Players Sign In</h2>
      <div className='flexContainer'>
      <form className='left' onSubmit={(e) => props.handleSignIn(e)}>
        <fieldset>
          <label htmlFor='playerNameInput'>Player {props.playerNum}: </label>
          <input required name='playerName' type='text' id='playerNameInput'></input>
          <button type='submit' >Submit</button>
        </fieldset>
      </form>
        <PlayerList className='right' playerList={props.playerList} />
      </div>
      <StartStory handleStart={props.handleStart}/>
    </section>
  )
}
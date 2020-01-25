import React, { Component } from 'react';
import Page from './Page/Page';
import Header from './Header/Header';
import SignIn from './SignIn/SignIn';
import './App.css';

// Loop though players until page full

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      story: [],
      whosTurn: 0,
      stage: 'PLAYERSETUP'
    }
  }

  inputValidation(arr) {
    // if array.length !== 2 error
    if(arr.length > 2) {
      return 'You need to write less than two lines.'
    } else if(arr.length < 2) {
      return 'You must write at least two lines'
    } else {
      return ''
    }
  }
  
  handleTurn = (e) => {
    e.preventDefault()
    // get two lines of text
    
    const twoLines = e.target.storyInput.value
    // validation on two lines and not more or less
    
    if(this.inputValidation(twoLines).length > 0) {
      const turn = twoLines.split('/r');
      console.log(turn);
      this.setState({
        story: [...this.state.story, ...turn],
        whosTurn: (this.state.whosTurn + 1) % this.state.players.length
      })
    } else {
      // display error message
      console.log(this.inputValidation(twoLines));
    }
    
    // split the two lines on CR
    // pass into state story arr
    // onClick
    // then update the next player
  }

  checkPageFull() {
    // check if 33 lines
    // or check for 500 words? way around mobile limitations?
  }

  handleSignIn = (e) => {
    e.preventDefault()
    this.setState({
      players: [...this.state.players, e.target.playerNameInput.value]
    })
    e.target.playerNameInput.value = '';
  }

  handleStart = () => {
    this.setState({
      stage: 'WRITING'
    });
  }

  render () {
    return (
      <>
        <Header header={this.state.stage === 'PLAYERSETUP' ? 'Welcome to The Writing Game': 'Enjoy The Writing Game'} />
        <main className="App">
          {this.state.stage === 'WRITING' ? 
            <Page 
              playerList={this.state.players}
              story={this.state.story}
              handleTurn={this.handleTurn}
            /> 
            : 
            <SignIn 
              handleStart={this.handleStart}
              handleSignIn={this.handleSignIn}
              playerList={this.state.players}
              playerNum={this.state.players.length + 1}
            />}
        </main>
      </>
    );
  }
}

export default App;

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
      stage: 'PLAYERSETUP'
    }
  }
  
  handleTurn() {
    // end turn after 2 carriage returns
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

  render () {
    return (
      <>
        <Header header={this.state.stage === 'PLAYERSETUP' ? 'Welcome to The Writing Game': 'Enjoy The Writing Game'} />
        <main className="App">
          {this.state.stage === 'WRITING' ? 
            <Page /> : 
            <SignIn 
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

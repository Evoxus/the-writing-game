import React, { Component } from 'react';
import Page from './Page/Page';
import Header from './Header/Header';
import './App.css';

// Player sign in component
// Start story component
// Loop though players until page full
// display player who's turn it is component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      story: []
    }
  }
  
  handleTurn() {
    // end turn after 2 carriage returns
  }

  checkPageFull() {
    // check if 33? lines
  }

  render () {
    return (
      <>
        <Header />
        <main className="App">
          <Page />
        </main>
      </>
    );
  }
}

export default App;

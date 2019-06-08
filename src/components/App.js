import React, { Component } from 'react';

import Table from './Table';
import Form from './Form';

export default class App extends Component {

  // init state
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const { characters } = this.state; // pull data from state

    // update state
    this.setState({
      characters: characters.filter((_, i) => {
        return i !== index;
      })
    })
  }

  handleSubmit = (character) => {
    // update state (merge App component state with child component Form state)
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    const { characters } = this.state; // pull data from state

    return (
      <div className="container">
        <Table
          characterData={characters} // set props
          removeCharacter={this.removeCharacter} // set props
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

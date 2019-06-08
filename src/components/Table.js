import React, { Component } from 'react';

import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody'

export default class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props; // get props
    
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData} // set props
          removeCharacter={removeCharacter} //set props
        />
      </table>
    )
  }
}





import React, { Component } from 'react';
import { rooms, start } from './rooms.js';
import Room from './Room.js';
import Player from './Player.js';

export default class App extends Component {
  
  state = {
    rooms,
    room: start,
    player: {
      name: 'Player1'
    }
  };

  handleMove = roomKey => {
    this.setState({
      room: this.state.rooms[roomKey]
    });
  };

  handleNameChange = name => {
    const { player } = this.state;
    player.name = name;
    this.setState({ player });
  };

  render(){
    const { player, room } = this.state;
    return (
      <div>
        <header>
          <Player player={player}
            onNameChange={this.handleNameChange}/>
        </header>
        <main>
          <Room room={room}
            onMove={this.handleMove}
          />
        </main>
      </div>
    );
  }
}
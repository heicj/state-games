import React, { Component } from 'react';
import { rooms, start } from './rooms.js';
import Room from './Room.js';
import Player from './Player.js';

export default class App extends Component {
  
  state = {
    rooms,
    room: start,
    player: {
      name: 'Player1',
      inventory: []
    }
  };

  handleMove = roomKey => {
    this.setState({
      room: this.state.rooms[roomKey]
    });
  };

  handleItem = item => {
    const { room, player } = this.state;
    const index = room.items.indexOf(item);
    room.items.splice(index, 1);
    player.inventory.push(item);

    this.setState({
      room,
      player
    });
  };

  handleUseItem = item => {
    console.log('in handleUseItem');
    const { room, player } = this.state;
    const index = player.inventory.indexOf(item);
    player.inventory.splice(index, 1);

    room.items.push(item);

    this.setState({
      room,
      player
    });
  }

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
            onNameChange={this.handleNameChange}
            onUse={this.handleUseItem}/>
        </header>
        <main>
          <Room room={room}
            onMove={this.handleMove}
            onItem={this.handleItem}
          />
        </main>
      </div>
    );
  }
}
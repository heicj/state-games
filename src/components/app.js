import React, { Component } from 'react';
import { rooms, start } from './rooms.js';
import Room from './Room.js';

export default class App extends Component {
  
  state = {
    rooms,
    room: start
  };

  handleMove = roomKey => {
    this.setState({
      room: this.state.rooms[roomKey]
    });
  };

  render(){
    const { room } = this.state;
    return (
      <div>
        <main>
          <Room room={room}
            onMove={this.handleMove}
          />
        </main>
      </div>
    );
  }
}
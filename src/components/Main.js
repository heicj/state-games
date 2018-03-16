import React, { Component } from 'react';
import { rooms, start } from './rooms.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Room from './Room.js';
import { addUser, logOut } from './actions';
import Player from './Player.js';
import './room.css';

class Main extends Component {
  
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
      action: '',
      room: this.state.rooms[roomKey]
    });
  };

  handleItem = item => {
    const { room, player } = this.state;
    const index = room.items.indexOf(item);
    room.items.splice(index, 1);
    const p = player.inventory.slice();
    p.push(item);
    
    this.setState({
      action: '',
      room,
      player: {
        name: 'Player1',
        inventory: p
      }
    });
  };

  handleUseItem = item => {
    const { room, player } = this.state;
    const index = player.inventory.indexOf(item);
    const p2 = player.inventory.slice();
    // player.inventory.splice(index, 1);
    p2.splice(index, 1);

    const action = room.use ? room.use(item) : '';
    if(!action) room.items.push(item);

    this.setState({
      action,
      room,
      player: {
        name: 'Player1',
        inventory: p2
      }
    });
  };

  handleNameChange = name => {
    const { player } = this.state;
    player.name = name;
    this.setState({ player });
  };

  handleSignOut = () => {
    logOut();
  };
  
  render(){
    const { player, room, action } = this.state;
    return (
      <div>
        <h1>Great Escape</h1>
    
        <main>
          <div id='mainDisplay'>
            <Room className='room' room={room}
              onMove={this.handleMove}
              onItem={this.handleItem}
              action={action}/>
            <Player className='playerDisplay' player={player}
              onNameChange={this.handleNameChange}
              onUse={this.handleUseItem}/>
          </div>
        </main>
        <footer>
          <Link to="/" onClick={logOut}>Log out</Link>
        </footer>
      </div>
    );
  }
}

export default connect (
  state => ({ user: state.user }),
  { addUser, logOut }
)(Main);
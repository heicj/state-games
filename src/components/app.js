import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { listenForUser } from './actions';
import Main from './Main';
import Login from './Login';

class App extends Component{

  componentDidMount() {
    this.props.listenForUser();
  }

  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute exact path='/game' component={Main}/>
            {/* <Route path='/game' component={Main} /> */}
            <Redirect to='/' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { listenForUser }
)(App);

// import React, { Component } from 'react';
// import { rooms, start } from './rooms.js';
// import Room from './Room.js';
// import Player from './Player.js';
// import './room.css';

// export default class App extends Component {
  
//   state = {
//     rooms,
//     room: start,
//     player: {
//       name: 'Player1',
//       inventory: []
//     }
//   };

//   handleMove = roomKey => {
//     this.setState({
//       action: '',
//       room: this.state.rooms[roomKey]
//     });
//   };

//   handleItem = item => {
//     const { room, player } = this.state;
//     const index = room.items.indexOf(item);
//     room.items.splice(index, 1);
//     player.inventory.push(item);

//     this.setState({
//       action: '',
//       room,
//       player
//     });
//   };

//   handleUseItem = item => {
//     const { room, player } = this.state;
//     const index = player.inventory.indexOf(item);
//     player.inventory.splice(index, 1);

//     const action = room.use ? room.use(item) : '';
//     if(!action) room.items.push(item);

//     this.setState({
//       action,
//       room,
//       player
//     });
//   };

//   handleNameChange = name => {
//     const { player } = this.state;
//     player.name = name;
//     this.setState({ player });
//   };

//   render(){
//     const { player, room, action } = this.state;
//     return (
//       <div>
//         <h1>Great Escape</h1>
//         <header>
//           <Player player={player}
//             onNameChange={this.handleNameChange}
//             onUse={this.handleUseItem}/>
//         </header>
//         <main>
//           <Room room={room}
//             onMove={this.handleMove}
//             onItem={this.handleItem}
//             action={action}/>
//         </main>
//       </div>
//     );
//   }
// }
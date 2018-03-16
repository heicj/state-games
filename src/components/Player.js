import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectItem from './SelectItem';

class Player extends Component {
  
  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState(prev => ({ editing: !prev.editing }));
  };

  render() {
    const { player, onNameChange, onUse, user } = this.props;
    const { editing } = this.state;
    console.log(user.displayName);
    return (
      <div className="player">
        {editing ? 
          <input value={player.name} onChange={({ target }) => onNameChange(target.value)}/> : 
          <span>{player.name}</span>
        }
        {user.displayName ? 
          <div>{user.displayName}</div> 
          : 
          player }
        <button onClick={this.handleEdit}>{editing ? 'Done' : 'Edit'}</button>
        <SelectItem items={player.inventory} onItem={onUse}/>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  null
)(Player);
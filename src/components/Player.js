import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectItem from './SelectItem';

class Player extends Component {
  
  render() {
    const { player, onUse, user } = this.props;
    
    return (
      <div className="player">
       
        {user.displayName ? 
          <div>{user.displayName}</div> 
          : 
          player }
        Inventory
        <SelectItem items={player.inventory} onItem={onUse}/>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  null
)(Player);
import React, { Component } from 'react';
import './room.css';


const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default class Room extends Component {
 
  render(){
    const { room, onMove } = this.props;
    const { title, description, image, doors } = room;

    return (
      <section className="room" >
        <h2>{title}</h2>
        <div className="imgDiv" style={{ backgroundImage: `url(${image})` }}>
        </div>
        <p>{description}</p>
        <h3>Doors</h3>
        <ul className="doors">
          {Object.keys(doors).map(key => (
            <li key={key}>
              <button onClick={() => onMove(doors[key])}>{directions[key]}</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
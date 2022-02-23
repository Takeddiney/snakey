import React, { Component } from 'react'
import Food from './Food'
import './Game.css'
import Snake from './Snake'

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}
class Game extends Component {
  state = {
    food:getRandomCoordinates(),
    snakeDots: [
      [0,0],
      [2,0]
    ]
  }
  render() {
    return (
      <div className="game">
        <header className="app__header">
          <div className="game__container">
            <Snake snakeDots={this.state.snakeDots} />
            <Food dot={this.state.snakeDots} />
          </div>
        </header>
      </div>
    )
  }

}

export default Game
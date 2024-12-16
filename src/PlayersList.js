// src/PlayersList.js
import React from 'react'
import Player from './Player'
import players from './players'

// Playerlist component that maps through the players
// and inputs the details in the Player component
const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  )
}

export default PlayersList

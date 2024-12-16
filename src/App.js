// src/App.js
import React from 'react'
import PlayersList from './PlayersList'

// render the PlayerList component in the App
function App() {
  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Football Players</h1>
      <PlayersList />
    </div>
  )
}

export default App

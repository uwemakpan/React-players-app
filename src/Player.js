// src/Player.js
import React from 'react'
import { Card } from 'react-bootstrap'

// Player component that receives player details as destructured props
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: '18rem',
    margin: '20px',
    textAlign: 'center',
    border: '2px solid #007bff',
  }

  const imgStyle = {
    width: '100%',
    height: 'auto',
  }

  return (
    <Card style={cardStyle}>
      <Card.Img variant='top' src={imageUrl} style={imgStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

// Default props in case any attribute is missing
Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 'N/A',
  imageUrl: 'https://via.placeholder.com/150',
}

export default Player

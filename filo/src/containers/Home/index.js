import React, { useState } from 'react'
import { Container, Select, MenuItem, Button } from '@material-ui/core'
import Navbar from '../../components/Navbar'

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState('MED')

  const handleCityChange = event => {
    setSelectedCity(event.target.value)
  }

  const handleSubmit = () => {
    console.log(selectedCity)
  }

  return (
    <>
      <Navbar />
      <Container>
        <h1>FILO</h1>
        <p>Filo te ayuda a escoger un restaurante cuando tu no puedes hacerlo por imbécil</p>
        <div>
          <Select
            value={selectedCity}
            onChange={handleCityChange}
          >
            <MenuItem value="MED">Medellín</MenuItem>
            <MenuItem value="BOG">Bogotá</MenuItem>
          </Select>
          <Button
            variant="outlined"
            onClick={handleSubmit}
          >
            Ir a la ruleta
          </Button>
        </div>
      </Container>
    </>
  )
}

export default HomePage
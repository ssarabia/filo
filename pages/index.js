import React from 'react'
import { Container } from '@material-ui/core';
import withRedux from "next-redux-wrapper";

import makeStore from '../store/reducers/index'
// import Navbar from "./components/Navbar"

const HomePage = () => {
  return(
    <Container>
      <h1>FILO</h1>
      <p>Filo te ayuda a buscar lo que deseas comer en los distintos restaurantes de Medellín. 
        Filtra tus preferencias y busca a donde puedes ir!
      </p>
    </Container>
  )
}

export default withRedux(makeStore, (state) => ({foo: state.foo}))(HomePage);

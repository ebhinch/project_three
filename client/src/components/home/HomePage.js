import React, { Component } from 'react'
import styled from 'styled-components';

const WelcomeText = styled.div`
  font-family: 'Carrois Gothic SC', sans-serif;
  font-size: 40px;
  text-align: center;
  margin-top: 10px;
`

class HomePage extends Component {
  render() {
    return (
      <div>
        <WelcomeText>Welcome to Charlottesvino</WelcomeText>
      </div>
    )
  }
}

export default HomePage


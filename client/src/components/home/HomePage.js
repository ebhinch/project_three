import React, { Component } from 'react'
import PageBody from "../styled-components/PageBody"
import { FlexRow } from "../styled-components/FlexContainers"
import { FlexColumn } from "../styled-components/FlexContainers"
import styled from 'styled-components';
import winemap from "./winemap.jpg"
// let Img = require('react-image')
const WelcomeText = styled.div`
font-size: 3em;
  text-align: center;
  font-weight: 900;
`

const WelcomeParagraph = styled.div`

  font-weight: 900;
  font-size: 20px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 25px;
`

const HomeBackground = styled.div`
  background-image: url(${winemap});
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 100vh;
`

const HomePageStyled = styled.div`
  font-family: 'Puritan', sans-serif;
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
  img {
    width: 100%;
    opacity: .5;
    margin-bottom: 5px;
    }
}
`


class HomePage extends Component {
  render() {
    return (
      <HomeBackground>
        <PageBody>
          {/* <img src={winemap} alt="wine map" /> */}

          <HomePageStyled>
            <WelcomeText>Welcome to Charlottesvino</WelcomeText>
            <br />
            <WelcomeParagraph>Time to get excited about planning your trip along Charlottesville's Monticello Wine Trail! Whether you're traveling from across the country or you're local, Charlottesvino makes planning easier, so you'll have more time for enjoying the region's beautiful wineries.</WelcomeParagraph>

            {/* <img src={winemap} alt="wine map" /> */}

          </HomePageStyled>

        </PageBody>
      </HomeBackground>
    )
  }
}

export default HomePage


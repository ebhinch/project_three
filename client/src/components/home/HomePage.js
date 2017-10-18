import React, { Component } from 'react'
import PageBody from "../styled-components/PageBody"
import { FlexRow } from "../styled-components/FlexContainers"
import { FlexColumn } from "../styled-components/FlexContainers"
import styled from 'styled-components';
import winemap from "./winemap.png"
// let Img = require('react-image')

const WelcomeText = styled.div`
  font-family: 'Carrois Gothic SC', sans-serif;
  font-size: 40px;
  text-align: center;
  margin-top: 10px;
`

// const HomeBackground = styled.div`
//   background-image: url(${winemap});
//   opacity: .5;
//   width: 100%;
//   background-size: cover;
//   background-position: center;
//   height: 100%
// `

const HomePageStyled = styled.div`
  font-family: 'Puritan', sans-serif;
  margin-top: 15px;
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
      <div>
        {/* <HomeBackground> */}
          <PageBody>
            {/* <img src={winemap} alt="wine map" /> */}

            <HomePageStyled>
              <WelcomeText>Welcome to Charlottesvino</WelcomeText>

              <p>Time to get excited about planning your trip along Charlottesville's Monticello Wine Trail! Whether you're traveling from across the country or you're local, Charlottesvino makes planning easier, so you'll have more time for enjoying the region's beautiful wineries.</p>

              <img src={winemap} alt="wine map" />

            </HomePageStyled>

          </PageBody>
        {/* </HomeBackground> */}
      </div>
    )
  }
}

export default HomePage


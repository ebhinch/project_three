import React from 'react'
import { Link } from 'react-router-dom'
import { FlexRow } from "./styled-components/FlexContainers"
import { FlexColumn } from "./styled-components/FlexContainers"
import styled from 'styled-components';


const FooterBar = FlexRow.extend`
  font-size: 18px;
  justify-content: space-around;
  font-family: 'Carrois Gothic SC', sans-serif;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 40px;
  a:hover {
    font-weight: 900;
    color: rgb(157, 15, 82);
  }
`

const Footer = () => {
  return (

    <FooterBar>
      <p><Link to="/">Charlottesvino</Link></p>
      <p><Link to="/users">Users</Link></p>
      <p><Link to="/vineyards">Winery Directory</Link></p>
      <p><Link to="/contact">Contact Us</Link></p>


    </FooterBar>
 
  )
}

export default Footer

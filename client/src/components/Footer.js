import React from 'react'
import { Link } from 'react-router-dom'
import { FlexRow } from "./styled-components/FlexContainers"
import { FlexColumn } from "./styled-components/FlexContainers"
import styled from 'styled-components';

const FooterBar = FlexRow.extend `
    font-size: 18px;
    justify-content: space-around;
    font-family: 'Mouse Memoirs', sans-serif;
    position: fixed;
    bottom: 0;
    width: 100%;
    `


// This is a stateless component
// It is much simpler than the class syntax because all you have to do is return JSX.
// Use these components when you don't need to manipulate state or use 
// lifecycle methods

const Footer = () => {
  return (
    <FooterBar>
  
        {/* Link is the React Router way of navigating to other parts of your app. */}
        {/* Use this instead of <a/> tags */}
       
        <p><Link to ="/users">Users</Link></p>
        <p><Link to ="/vineyards">Winery Directory</Link></p>
        <p><Link to="/contact">Contact Us</Link></p>
        

    </FooterBar>
  )
}

export default Footer

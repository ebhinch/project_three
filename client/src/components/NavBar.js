import React from 'react'
import { Link } from 'react-router-dom'

import { FlexRow } from "./styled-components/FlexContainers"
import { FlexColumn } from "./styled-components/FlexContainers"
import styled from 'styled-components';

const HeaderBar = FlexRow.extend `
    font-size: 14px;
    justify-content: space-around;
    font-family: 'Carrois Gothic SC', sans-serif;
    width: 100%;
    box-shadow: 2px 2px 1px grey;
 

   `


const NavBar = () => {
    return (
        <div>

            {/* Link is the React Router way of navigating to other parts of your app. */}
            {/* Use this instead of <a/> tags */}
            <HeaderBar>
            <p><Link to="/">Charlottesvino</Link></p>
            <p> <Link to="/users">Users</Link></p>
            <p> <Link to="/vineyards">Winery Directory</Link></p>
            <p> <Link to="/contact">Contact Us</Link></p>
            </HeaderBar>

        </div>
    )
}

export default NavBar



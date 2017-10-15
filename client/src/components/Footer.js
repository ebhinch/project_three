import React from 'react'
import { Link } from 'react-router-dom'

// This is a stateless component
// It is much simpler than the class syntax because all you have to do is return JSX.
// Use these components when you don't need to manipulate state or use 
// lifecycle methods

const Footer = () => {
  return (
    <div>
  
        {/* Link is the React Router way of navigating to other parts of your app. */}
        {/* Use this instead of <a/> tags */}
        <p>Footer</p>
        <p><Link to ="/users">Users</Link></p>
        <p><Link to ="/vineyards">Winery Directory</Link></p>
        <p><Link to="/contact">Contact Us</Link></p>
        

    </div>
  )
}

export default Footer

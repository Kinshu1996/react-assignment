import React from 'react'
import {RiCopyrightLine} from "react-icons/ri"
import "./footer.css";

const Footer = () => {
  let date = new Date();
  const year = date.getFullYear();
  return (
    <div className='footer-section'>
      <div className='footer-content'>
        <RiCopyrightLine />
        Ankit Agrawal {year}. All Rights Reserved.
      </div>
      
    </div>
  )
}

export default Footer

import React from 'react'
import logoFooter from '../assets/logoFooter.png'

export default function Footer() {
  return (
    <div className='footer'>
        <img src={logoFooter} alt="logo footer" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

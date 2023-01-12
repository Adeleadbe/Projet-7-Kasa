import React from 'react'
import NavBar from '../components/NavBar'
import Error404 from '../components/Error404'


export default function PageError() {
  return (
    <div className='page_error'>
      <NavBar />
      <Error404 />
    </div>
  )
}

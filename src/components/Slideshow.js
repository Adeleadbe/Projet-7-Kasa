import React from 'react'
import logements from '../data/logements.json'
import { useState } from 'react'

export default function Slideshow() {
  return (
    <div className='container_slider'>
        {logements.map((logement) => {
            return (
              <div>
                <img className='slideshow_picture' key={logement.id} src={logement.pictures} alt="Différente photos du logement" />
                </div>
            )
        })}
    </div>
  )
}

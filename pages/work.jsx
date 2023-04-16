import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='My work' message='These are some of my recent work travelling the world'/>
        <Portfolio />
    </div>
  )
}

export default work
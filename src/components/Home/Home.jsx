import React from 'react'

import Vision from './Vision'
import Studyat from './Studyat'
import Hero from './Hero'
import SiteAbout from './SiteAbout'
import TourAbout from './TourAbout'
import Learning from './Learning'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Vision />
        <TourAbout />
        <SiteAbout />
        <Learning />
        {/* <Studyat /> */}
        
    </div>
  )
}

export default Home
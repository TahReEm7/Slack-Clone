import React from 'react'
import BannerIntro from './intro'
import SponsorCard from './sponsors'
import BannerVideo from './video'

function Banner() {
  return (
    <div>
      <BannerIntro/>
      <SponsorCard/>
      <BannerVideo/>
    </div>
  )
}

export default Banner
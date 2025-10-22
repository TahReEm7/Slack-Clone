import React from 'react'

function BannerVideo() {
  return (
    <div className=" ">
      <video
        className="md:max-w-3xl p-4 rounded-md mx-auto"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/video1.webm" type="video/mp4" />
      </video>
    </div>
  )
}

export default BannerVideo

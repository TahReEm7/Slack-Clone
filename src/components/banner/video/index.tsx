import React from 'react'

function BannerVideo() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      {/* Video Section */}
      <div className="relative z-10 flex justify-center">
        <video
          className="md:max-w-3xl p-4 rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/video1.webm" type="video/webm" />
        </video>
      </div>

      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          className="w-full h-[250px]"
        >
          <path
            d="M0,100 C150,0 350,0 500,100 L500,100 L0,100 Z"
            fill="#F4ECFE"  
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default BannerVideo

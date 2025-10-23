import React from 'react'

import { Box, Text } from '@mantine/core'
import { IconBolt, IconConfettiFilled, IconContract, IconStars } from '@tabler/icons-react'
import MainHead from '../header'


function MainBodyMobile() {
  return (
     <Box
      style={{
        background: 'linear-gradient(to bottom, #F4ECFE, white)',
        minHeight: '100vh',
      }}
    >
      <MainHead/>
      {/* 1 */}
       <section className='flex md:flex-row flex-col items-center justify-between gap-10 my-10 text-start'>
           <div className='md:max-w-1/2 text-center md:text-start mx-auto flex  justify-center gap-4 flex-col md:h-screen '>
         <div className=' flex gap-2 font-extrabold'>
              <IconConfettiFilled size={24} stroke={1.5} />
              <Text>
                Collaboration
              </Text>
            </div>
          <h1 className='text-3xl font-bold'>Communicate in countless
            <br /> ways from one place.</h1>
          <p>Slack is built for bringing people and information 
            <br /> together. Type things out. Talk things out. Invite 
           <br /> external organizations into the conversation.</p>
          <div className='flex items-center justify-center gap-2'>
            <span className='text-4xl font-bold text-[#611F69]'>80%</span>
            <p>of the Fortune 100 use Slack Connect 
              <br /> to work with partners and customers<sup>1</sup></p>
          </div>
        </div>


 <div className='sticky top-40 left-0 md:w-1/2 z-50'>
           <video
          className="md:max-w-xl p-4 rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/main/1.webm" type="video/webm" />
        </video>
        </div>
       </section>

             {/* 2 */}
        <section className='flex md:flex-row flex-col items-center justify-between gap-10 my-10 text-start'>
         <div className='md:max-w-1/2 text-center md:text-start mx-auto flex  justify-center gap-4 flex-col md:h-screen '>
       <div className='flex  gap-2 font-semibold'>
              <IconContract size={24} stroke={1.5} />
              <Text>
                Project management
              </Text>
            </div>

          <h1 className='text-3xl font-bold'>Manage projects and move 
           <br /> work forward faster.</h1>
          <p>Prioritize tasks, share ideas, and stay aligned. Slack
            <br /> brings every piece of your project together from
            <br /> start to finish.</p>
          <div className='flex items-center justify-center gap-2'>
            <span className='text-4xl font-bold text-[#611F69]'>47%</span>
            <p>increase in productivity for teams using
              <br /> Slack<sup>2</sup></p>
          </div>
        </div>


         <div className='sticky top-40 left-0 md:w-1/2 z-50'>
           <video
          className="md:max-w-xl  p-4 rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/main/2.webm" type="video/webm" />
        </video>
        </div>
       </section>

        
      {/* 3 */}
               <section className='flex md:flex-row flex-col items-center justify-between gap-10 my-10 text-start'>
          <div className='md:max-w-1/2 text-center md:text-start mx-auto flex  justify-center gap-4 flex-col md:h-screen '>
            <div className='flex  gap-2 font-semibold'>
                     <IconBolt size={24} stroke={1.5} />
                      <Text>
                        integrations
                      </Text>
                    </div>
          <h1 className='text-3xl font-bold'>
                Tap into the tools you
                <br /> already use.</h1>
          <p>Over 2,600 apps are ready to connect in Slack so you
            <br /> can automate everyday tasks in the flow of work, and
            <br /> save your team precious time.</p>
          <div className='flex items-center gap-2'>
            <span className='text-4xl font-bold text-[#611F69]'>35%</span>
            <p>
              increase in time saved due to
              <br /> automation for Slack users<sup>3</sup></p>
          </div>
        </div>


 <div className='sticky top-40 left-0 md:w-1/2 z-50'>
           <video
          className="md:max-w-xl p-4 rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/main/3.webm" type="video/webm" />
        </video>
        </div>
       </section>

             {/* 4 */}
        <section className='flex md:flex-row flex-col items-center justify-between gap-10 my-10 text-start'>
           <div className='md:max-w-1/2 text-center md:text-start mx-auto flex  justify-center gap-4 flex-col md:h-screen '>
        <div className='flex gap-2 font-semibold'>
            <IconStars size={24} stroke={1.5} />
              <Text>
                Slack AI
              </Text>
            </div>

          <h1 className='text-3xl font-bold'>Communicate in countless
            <br /> ways from one place.</h1>
          <p>Slack is built for bringing people and information 
            <br /> together. Type things out. Talk things out. Invite 
           <br /> external organizations into the conversation.</p>
          <div className='flex items-center  gap-2'>
            <span className='text-4xl font-bold text-[#611F69]'>97 min</span>
            <p>of the Fortune 100 use Slack Connect 
              <br /> to work with partners and customers<sup>1</sup></p>
          </div>
        </div>


         <div className='sticky top-40 left-0 md:w-1/2 z-50'>
           <video
          className="md:max-w-xl p-4 rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/main/4.webm" type="video/webm" />
        </video>
        </div>
       </section>

    </Box>
  )
}

export default MainBodyMobile

import { Box, Text } from '@mantine/core'
import React from 'react'
import {  IconBolt, IconCloud, IconConfetti, IconContract, IconStars } from "@tabler/icons-react";

function MainHead() {
  return (
    <Box className='linear-gradient(to bottom, #F4ECFE, white) pt-10 space-y-8'>
      <h1 className='md:text-5xl text-2xl text-center font-bold'>Bring your people, projects, apps, 
        <br /> and AI agents together.</h1>

        <section className='md:flex items-center justify-center gap-6 hidden'>
           <div className='flex items-center justify-center gap-2 font-semibold'>
              <IconConfetti size={24} stroke={1.5} />
              <Text>
                Collaboration
              </Text>
            </div>

         <div className='flex items-center justify-center gap-2 font-semibold'>
              <IconContract size={24} stroke={1.5} />
              <Text>
                Project management
              </Text>
            </div>

           <div className='flex items-center justify-center gap-2 font-semibold'>
             <IconBolt size={24} stroke={1.5} />
              <Text>
                integrations
              </Text>
            </div>

         <div className='flex items-center justify-center gap-2 font-semibold'>
            <IconStars size={24} stroke={1.5} />
              <Text>
                Slack AI
              </Text>
            </div>

          <div className='flex items-center justify-center gap-2 font-semibold'>
              <IconCloud size={24} stroke={1.5} />
              <Text>
                Agentforce
              </Text>
            </div>

        </section>
    </Box>
  )
}

export default MainHead

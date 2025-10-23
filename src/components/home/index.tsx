import { Box } from '@mantine/core'
import React from 'react'
import Banner from '../banner'
import MainBodyMobile from '../main/components/bodyMobile'
import { MainBody } from '..'


function Home() {
  return (
    <Box>
      <Banner/>
     <div className='md:hidden'>
       <MainBodyMobile/>
     </div>
     <MainBody/>
    </Box>
  )
}

export default Home
'use client'
import React, { useRef, useState } from 'react'
import MainHead from './components/header'
import { Box, Text } from '@mantine/core'
import { IconBolt, IconConfettiFilled, IconContract, IconStars } from '@tabler/icons-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { videos } from '@/constants'

function MainBody() {
  const [scroll, setScroll] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => setScroll(value));



  const showVideo = (index: number) => {
    const start = index * 0.25;
    const end = start + 0.20; // show video for 20% of scroll
    return scroll >= start && scroll <= end;
  };

  const sections = [
    {
      icon: <IconConfettiFilled size={24} stroke={1.5} />,
      title: 'Collaboration',
      heading: 'Communicate in countless<br /> ways from one place.',
      text: 'Slack is built for bringing people and information <br /> together. Type things out. Talk things out. Invite <br /> external organizations into the conversation.',
      stat: '80%',
      statText: 'of the Fortune 100 use Slack Connect <br /> to work with partners and customers<sup>1</sup>'
    },
    {
      icon: <IconContract size={24} stroke={1.5} />,
      title: 'Project management',
      heading: 'Manage projects and move <br /> work forward faster.',
      text: 'Prioritize tasks, share ideas, and stay aligned. Slack<br /> brings every piece of your project together from<br /> start to finish.',
      stat: '47%',
      statText: 'increase in productivity for teams using<br /> Slack<sup>2</sup>'
    },
    {
      icon: <IconBolt size={24} stroke={1.5} />,
      title: 'Integrations',
      heading: 'Tap into the tools you<br /> already use.',
      text: 'Over 2,600 apps are ready to connect in Slack so you<br /> can automate everyday tasks in the flow of work, and<br /> save your team precious time.',
      stat: '35%',
      statText: 'increase in time saved due to<br /> automation for Slack users<sup>3</sup>'
    },
    {
      icon: <IconStars size={24} stroke={1.5} />,
      title: 'Slack AI',
      heading: 'Communicate in countless<br /> ways from one place.',
      text: 'Slack is built for bringing people and information <br /> together. Type things out. Talk things out. Invite <br /> external organizations into the conversation.',
      stat: '97 min',
      statText: 'of the Fortune 100 use Slack Connect <br /> to work with partners and customers<sup>1</sup>'
    },
  ];

  return (
    <Box
      ref={containerRef}
      style={{
        background: 'linear-gradient(to bottom, #F4ECFE, white)',
        minHeight: '400vh',
      }}
    >
      <MainHead />

      {sections.map((section, index) => (
        <section key={index} className='flex flex-row items-center justify-between gap-10 my-10 text-start h-screen'>
          <div className='max-w-1/2 mx-auto flex justify-center gap-4 flex-col '>
            <div className={`flex gap-2 font-${index === 0 ? 'extrabold' : 'semibold'}`}>
              {section.icon}
              <Text>{section.title}</Text>
            </div>
            <h1 className='text-3xl font-bold' dangerouslySetInnerHTML={{ __html: section.heading }} />
            <p dangerouslySetInnerHTML={{ __html: section.text }} />
            <div className='flex items-center gap-2'>
              <span className='text-4xl font-bold text-[#611F69]'>{section.stat}</span>
              <p dangerouslySetInnerHTML={{ __html: section.statText }} />
            </div>
          </div>

          <div className='sticky top-40 left-0 w-1/2 z-50'>
            <AnimatePresence>
              {showVideo(index) && (
                <motion.video
                  key={index}
                  className="md:max-w-xl p-4 rounded-xl origin-bottom-right"
                  src={videos[index]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={index === videos.length - 1 ? {} : { opacity: 0, scale: 0.95 }}
                  transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8, ease: "easeInOut" } }}
                />
              )}
            </AnimatePresence>
          </div>
        </section>
      ))}
    </Box>
  )
}

export default MainBody

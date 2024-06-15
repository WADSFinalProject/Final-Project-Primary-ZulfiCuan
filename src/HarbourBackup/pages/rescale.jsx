import React from 'react'
import { icons, images } from '../constants'
import BottomTab from '../components/BottomTab'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import RescaleLists from '../components/RescaleLists'
import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

function Rescale({ togglePage, pages }) {

  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const springs = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const appear = useSpring({ 
    config: {
      duration: 1200,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const spring = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    delay: 100,
    to: { y: 0, opacity: 1 },
  })  

  const spring2 = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })  

  return (
    <div className='container flex flex-col min-h-screen'>
      <div className='z-10 items-start flex w-full items-center py-3 px-4 bg-primary h-16 fixed overflow-auto'>
          <animated.div style={{...appear}}>
            <img
                src={images.xyzPfp}
                alt="Profile Picture"
                className='w-10 h-10'
                style={{ objectFit: 'contain'}}
            />
          </animated.div>

          <div className="ml-2">
              <animated.div style={{...spring}}>
                <p className="font-hnroman text-xs text-secondary">
                  Welcome,
                </p>
              </animated.div>

              <animated.div style={{...spring2}}>
                <p className="text-base font-hnbold text-secondary">
                  John Doeee
                </p>
              </animated.div>
          </div>

          <img 
              src={icons.xyzNotifications}
              alt="Notifications"
              className="ml-auto w-7 h-7"
              style={{ objectFit: 'contain'}}
              onClick={() => togglePage(0, 1)}
          />
      </div>

      <div className='z-10 fixed h-12 w-full py-2 px-4 mt-16'>
        <animated.p style={{...springs}} className='text-secondary mt-4 text-2xl font-hnbold'>
            Scanning History
        </animated.p>
      </div>

      <div className='absolute mx-4 mt-32 space-x-1 flex items-center overflow-x-scroll'>
        <div className='flex items-center justify-center h-8 w-[100px] border border-secondary rounded-2xl'>
          <p className='text-secondary text-xs font-hnroman'>View All</p>
        </div>

        <div className='flex items-center justify-center h-8 w-[100px] border border-secondary rounded-2xl'>
          <p className='text-secondary text-xs font-hnroman'>In Progress</p>
        </div>

        <div className='flex items-center justify-center h-8 w-[100px] border border-secondary rounded-2xl'>
          <p className='text-secondary text-xs font-hnroman'>Completed</p>
        </div>

        <div className='flex items-center justify-center h-8 w-[100px] border border-secondary rounded-2xl'>
          <p className='text-secondary text-xs font-hnroman'>Cancelled</p>
        </div>


      </div>

      
      <BottomTab scrollPercent={scrollPercent} togglePage={togglePage} pages={pages}/>
    </div>   
  )
}

export default Rescale
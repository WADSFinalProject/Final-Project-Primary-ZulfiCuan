import React from 'react';
import { useSpringRef, useSpring, animated, useChain, easings } from '@react-spring/web';
import { icons } from '../constants';

const SpinningHourglass = () => {
    const spinRef = useSpringRef();
    const pauseRef = useSpringRef();
  
    // First spin animation (0 to 360 degrees in 0.5 seconds)
    const spin = useSpring({
      ref: spinRef,
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
      config: { duration: 1500,
                tension: 180,
                friction: 12,
                easing: easings.easeInElastic
            },
      loop: true,      
    });

    // Pause animation (no change, just a delay)
    const pause = useSpring({
      ref: pauseRef,
      from: { opacity: 1 },
      to: { opacity: 1 },
      config: { duration: 1000 }, // 1 second pause
      loop: true,
    });
  
    // Chain the animations with specified delays
    useChain([spinRef, pauseRef], [0, 1]);
  
    return (
      <animated.div style={spin}>
          <animated.div style={pause}>
            <img 
            src={icons.xyzHourglass}
            className='w-3 h-3'
            style={{ zIndex: 0 }}
            />
          </animated.div>
      </animated.div>
    );
}

export default SpinningHourglass
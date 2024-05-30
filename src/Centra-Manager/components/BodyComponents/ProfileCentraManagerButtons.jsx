import '../../css/ProfileCentraManager.css'
import { useSpring, animated } from '@react-spring/web'

// eslint-disable-next-line react/prop-types
function ProfileCentraManagerButtons({label, imgSRC, animationStart}) {
  const springs = useSpring({
    config: {
      tension: 190, 
      friction: 60
    },
    from: { y: animationStart },
    to: { y: 0 },
  })

  return (
    <animated.div className='ProfileCentraManagerContainerEditProfileButton' style={{...springs}}>
        <img src={imgSRC} className='ProfileCentraManagerButtonImagePlaceHolder'></img>
        <div className='ProfileCentraManagerTextLabel'>{label}</div>
        <img src='src\Centra-Manager\assets\ArrowIconProfile.svg' className='ProfileCentraManagerArrowImage'></img>
    </animated.div>
  )
}

export default ProfileCentraManagerButtons
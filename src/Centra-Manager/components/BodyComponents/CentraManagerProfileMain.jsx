import '../../css/ProfileCentraManager.css'
import ProfileCentraManagerButtons from './ProfileCentraManagerButtons'
import { useSpring, animated } from '@react-spring/web'

function CentraManagerProfileMain() {
  const springs = useSpring({
    config: {
      tension: 190, 
      friction: 60
    },
    from: { y: -200 },
    to: { y: 0 },
  })

  return (
    <div className='ProfileColorContainer'>
        <animated.div className='ProfileCentraManagerContainerTopHalf' style={{...springs}}>
            <div className='ProfileCentraManagerContainerTitle'>Account</div>
            <img src='src\Centra-Manager\assets\ProfileTest.jpg' className='ProfileCentraManagerImageContainer'></img>
            <div className='ProfileCentraManagerContainerTextUsername'>John Doe</div>
            <div className='ProfileCentraManagerContainerSubText'>Centra Manager</div>
            <div className='ProfileCentraManagerContainerIDText'>ID: U108</div>
        </animated.div>
        <div style={{paddingTop: "258px"}}>
            <ProfileCentraManagerButtons label={"Edit Profile"} imgSRC={'src/Centra-Manager/assets/EditIcon.svg'} animationStart={200}/>
            <ProfileCentraManagerButtons label={"Settings"} imgSRC={'src/Centra-Manager/assets/SettingsIcon.svg'} animationStart={400}/>
            <ProfileCentraManagerButtons label={"Logout"} imgSRC={'src/Centra-Manager/assets/LogOutIcon.svg'} animationStart={600}/>
        </div>
    </div>
  )
}

export default CentraManagerProfileMain
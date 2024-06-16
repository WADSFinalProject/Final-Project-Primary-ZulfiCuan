import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
function ProfileNotifSetting({togglePage, pages}) {


    const [ProfiileNotifNames, setProfiileNotifNames] = useState({
        userName: 'John Doe',
        userRole: 'Admin'
    });
    
  return (
    <div className="items">
            <div className="profile">
              <div className="name">{ProfiileNotifNames.userName}</div>
              <div className="role">{ProfiileNotifNames.userRole}</div>
            </div>
            <div className="item" >
              <img src="src/Admin/assets/pexels-lum3n-44775-406014.jpg" alt="" className='avatar' />
            </div>
            <div className="separator"></div>
            <div className="item">
              <NotificationsNoneOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} onClick={() => togglePage(0, 0)} />
              <div className="counter">1</div>
            </div>
            <div className="setting">
              <SettingsOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} />
            </div>
          </div>
  )
}

export default ProfileNotifSetting

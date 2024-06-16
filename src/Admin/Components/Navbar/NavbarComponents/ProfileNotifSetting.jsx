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
    <div className="items-admin">
            <div className="profile-admin">
              <div className="name-admin">{ProfiileNotifNames.userName}</div>
              <div className="role-admin">{ProfiileNotifNames.userRole}</div>
            </div>
            <div className="item-admin" >
              <img src="src/Admin/assets/pexels-lum3n-44775-406014.jpg" alt="" className='avatar-admin' />
            </div>
            <div className="separator-admin"></div>
            <div className="item-admin">
              <NotificationsNoneOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} onClick={() => togglePage(0, 0)} />
              <div className="counter-admin">1</div>
            </div>
            <div className="setting-admin">
              <SettingsOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} />
            </div>
          </div>
  )
}

export default ProfileNotifSetting

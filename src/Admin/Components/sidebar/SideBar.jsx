import './SideBar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';


// eslint-disable-next-line react/prop-types
function SideBar({ togglePage, pages }) { 
    return (
      <div className='sidebar'>
          <div className="top">
              <span className="logo">Moringa</span>
          </div>
          <div className="center">
              <ul>
                  <li onClick={() => togglePage(0, 0)}>
                      <DashboardOutlinedIcon className='icon' />
                      <span>Dashboard</span>
                  </li>
                  <li>
                      <AdjustIcon className='icon' />
                      <span>Centra</span>
                  </li>
                  
                  <li>
                      <PersonOutlineOutlinedIcon className='icon'/>
                      <span>Accounts</span>
                  </li>
              </ul>
          </div>
      </div>
    );
  }
  
export default SideBar;
  
import './Centra.scss';
import SideBar from '../../Components/sidebar/SideBar'
import Navbar from '../../Components/Navbar/Navbar';
import CentraTable from '../../Components/CentraTable/CentraTable';
import { useState } from 'react';

function Centra({togglePage, pages}) {
  const [showAddCentra, setShowAddCentra] = useState(false);

  const handleAddCentra = () => {
    setShowAddCentra(true);
  };

  const handleBack = () => {
    setShowAddCentra(false);
  };
  return (
    <div className='CentraPage-admin'>
      <SideBar togglePage={togglePage} pages />
      <div className="CentraContent-admin">
      <Navbar />
        <div className="CentraTableContainer-admin">
          <div className="CentraHeader-admin">
            <h1 className="CentraTitle-admin">Centra</h1>
          </div>
        </div>
        <CentraTable />

      </div>
  </div>
  )
}

export default Centra;

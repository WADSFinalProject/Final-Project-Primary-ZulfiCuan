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
    <div className='CentraPage'>
      <SideBar togglePage={togglePage} pages />
      <div className="CentraContent">
      <Navbar />
        <div className="CentraTableContainer">
          <div className="CentraHeader">
            <h1 className="CentraTitle">Centra</h1>
          </div>
        </div>
        <CentraTable />

      </div>
  </div>
  )
}

export default Centra;

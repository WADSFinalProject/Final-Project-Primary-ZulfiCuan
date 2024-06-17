import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SwitchLogin from './Login-Page-Desktop/SwitchLogin';
import CentraManagerMain from './Centra-Manager/components/CentraManagerMain';
import '../src/index.css'
import XYZStorage from './Storage-Mobile/pages/real-main-page';
import Harbour from './Harbour/pages/firstPageH';
import ManagerPage from './XYZ-Manager/Pages/MainPage/ManagerPage';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<SwitchLogin />} />
                <Route exact path="/CentraManager" element={<CentraManagerMain />} />
                <Route exact path="/Harbour" element={<Harbour />} />                
                <Route exact path="/XYZstorage" element={<XYZStorage />} />
                <Route exact path="/XYZManager" element={<ManagerPage />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
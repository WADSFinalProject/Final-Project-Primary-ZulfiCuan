import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SwitchLogin from './Login-Page-Desktop/SwitchLogin';
import CentraManagerMain from './Centra-Manager/components/CentraManagerMain';
import HarbourMain from './Harbour/components/HarbourMain'
import HarbourQRMain from './Harbour/components/HarbourQRMain';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<SwitchLogin />} />
                <Route exact path="/CentraManager" element={<CentraManagerMain />} />
                <Route exact path="/Harbour" element={<HarbourMain />} />
                <Route exact path="/HarbourQR" element={<HarbourQRMain />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
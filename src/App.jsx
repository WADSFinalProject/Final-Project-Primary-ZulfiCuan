import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SwitchLogin from './Login-Page-Desktop/SwitchLogin';
import CentraManagerMain from './Centra-Manager/components/CentraManagerMain';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<SwitchLogin />} />
                <Route exact path="/CentraManager" element={<CentraManagerMain />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
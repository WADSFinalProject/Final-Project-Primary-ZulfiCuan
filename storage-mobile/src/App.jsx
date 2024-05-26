import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login'
import Rescale from './pages/rescale';
import QR from './pages/qr';
import Account from './pages/account';
import Notifications from './pages/notifications';
import '../src/index.css'

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/rescale" element={<Rescale/>} />
                <Route exact path="/qr" element={<QR/>} />
                <Route exact path="/account" element={<Account/>} />
                <Route exact path="/notifications" element={<Notifications/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
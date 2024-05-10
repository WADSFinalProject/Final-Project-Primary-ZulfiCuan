import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login-Page-Desktop/components/LoginPage';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
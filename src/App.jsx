import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login-Page-Desktop/components/LoginPage';
import LoginPageMobile from './Login-Page-Mobile/components/LoginPageMobile'

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/LoginPageMobile" element={<LoginPageMobile />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SwitchLogin from './Login-Page-Desktop/SwitchLogin';
import CentraManagerMain from './Centra-Manager/components/CentraManagerMain';
import '../src/index.css'
import XYZStorage from './Storage-Mobile/pages/real-main-page';
import Harbour from './Harbour/pages/firstPageH';
import ManagerPage from './XYZ-Manager/Pages/MainPage/ManagerPage';
import AdminPage from './Admin/Pages/MainPage/MainPage'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const [Roles, setRoles] = useState('None')
const test = "hello"
  useEffect(() => {
      try {
        const response = axios.post('http://localhost:8000/whoami/', {}, {withCredentials: true});
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }, []);

  async function getUser() {
      axios.post(`http://localhost:8000/create_session/${test}`, {}, {withCredentials: true})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching session data:', error);
      });
    }

  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<SwitchLogin />} />
                <Route exact path="/CentraManager" element={<CentraManagerMain />} />
                <Route exact path="/Harbour" element={<Harbour />} />                
                <Route exact path="/XYZstorage" element={<XYZStorage />} />
                <Route exact path="/XYZManager" element={<ManagerPage />} />
                <Route exact path="/Admin" element={<AdminPage />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
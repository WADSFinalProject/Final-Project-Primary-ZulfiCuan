import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileManager.scss';
import SideBar from '../../Components/sidebar/SideBarManager';
import Navbar2 from '../../Components/Navbar/NavbarManager2';
import MySVG from '../../assets/choose_file_image.svg';

const Profile = ({ togglePage, pages, userName }) => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    password: '',
    role: '',
    image: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/whoami', null, {
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as required
          },
          withCredentials: true, // Important for CORS and credentials
        });
        const userData = response.data;
        setFormData({
          name: userData.name,
          dateOfBirth: userData.dateOfBirth,
          email: userData.email,
          role: userData.role,
          password: '',  // Ensure you don't fetch sensitive data like passwords
          image: null,   // Adjust as per your application's needs
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error accordingly
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  const handleReset = () => {
    // Reset form data as needed
    setFormData({
      name: '',
      dateOfBirth: '',
      email: '',
      password: '',
      role: '',
      image: null,
    });
  };

  return (
    <div className="home-manager">
      <SideBar togglePage={togglePage} pages={pages} />
      <div className="fixdash-2-manager"></div>
      <div className="homeContainer-manager">
        <Navbar2 togglePage={togglePage} pages={pages} userName={userName} />
        <div className="container-manager">
          <h1 className="header-manager">Profile</h1>
          <div className="image-container-manager">
            <label htmlFor="fileInput" className="file-input-manager">
              <img src={MySVG} alt="Choose file" />
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <div className="container-text-below-buttons-manager">
              <div className="buttons-vertical-manager">
                <button type="button" onClick={handleSubmit} className="button2-manager button-upload-manager">Upload</button>
                <button type="button" onClick={handleReset} className="button2-manager button-reset-manager">Reset</button>
              </div>
              <div className="h3-style-manager">
                <h3>Allowed JPG, GIF, or PNG. Max size of 1MB.</h3>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form-manager">
            <div className="left-section-editor-manager">
              <div className="left-section-manager">
                <div className="input-group-manager">
                  <label className="label-manager">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-manager"
                  />
                </div>
                <div className="input-group-manager">
                  <label className="label-manager">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-manager"
                  />
                </div>
                <div className="input-group-manager">
                  <label className="label-manager">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="input-manager"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="right-section-manager">
              <div className="input-group-manager">
                <label className="label-manager">Birth Date</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="input-manager"
                />
              </div>
              <div className="input-group-password-manager">
                <div className="input-group-manager">
                  <label className="label-manager">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-pw-manager"
                  />
                </div>
              </div>
              <div className="button-group-manager">
                <button type="submit" className="button-manager">Save Changes</button>
                <button type="button" onClick={handleReset} className="button-manager">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
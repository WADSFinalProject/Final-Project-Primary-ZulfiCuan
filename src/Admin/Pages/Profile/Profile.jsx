import React, { useState } from 'react';
import './Profile.scss';
import SideBar from '../../components/SideBar.scss';
import Navbar from '../../Components/Navbar/Navbar';
// import MySVG from '../../assets/choose_file_image.svg';

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: 'Mas Budi',
    birthDate: '1988-08-08',
    email: 'masbudi@gmail.com',
    password: '',
    role: 'Manager',
    image: null,
  });

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
    setFormData({
      fullName: 'Mas Budi',
      birthDate: '1988-08-08',
      email: 'masbudi@gmail.com',
      password: '',
      role: '',
      image: null,
    });
  };

  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="container">
          <h1 className="header">Profile</h1>
          <div className="image-container">
  <label htmlFor="fileInput" className="file-input">
    {/* <img src={MySVG} alt="Choose file" />    */}
  </label>
  <input
    id="fileInput"
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    style={{ display: 'none' }}
  />
   <div className="container-text-below-buttons">
    <div className="buttons-vertical">
    <button type="button" onClick={handleSubmit} className="button button-upload">Upload</button>
    <button type="button" onClick={handleReset} className="button">Reset</button>
    </div>
    <div className = "h3-style">
      <h3>Allowed JPG, GIF, or PNG. Max size of 1MB.</h3>
    </div>
    </div>
    
    
</div>

    
    
  
          <form onSubmit={handleSubmit} className="form">
            <div className="left-section">
              <div className="input-group">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="input-group">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="input-group">
                <label className="label">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="select"
                >
                  <option value="Manager">Manager</option>
                  <option value="Employee">Employee</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="right-section">
              <div className="input-group">
                <label className="label">Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="input-group-password">
                <div className="input-group">
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-pw"
                  />
                </div>
                <div className="change-button">
                <button type="button" className="button">Change</button>
                </div>
                
              </div>
              <div className="button-group">
                <button type="submit" className="button">Save Changes</button>
                <button type="button" onClick={handleReset} className="button">Cancel</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from 'react';
import './ProfileManager.scss';
import SideBar from '../../Components/sidebar/SideBarManager';
import Navbar2 from '../../Components/Navbar/NavbarManager2';
import MySVG from '../../assets/choose_file_image.svg';

const Profile = ({togglePage, pages}) => {
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
    <div className="home-manager">
      <SideBar togglePage={togglePage} pages={pages}/>
      <div className="homeContainer-manager">
        <Navbar2 togglePage={togglePage} pages={pages}/>
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
    <button type="button" onClick={handleSubmit} className="button-manager button-upload-manager">Upload</button>
    <button type="button" onClick={handleReset} className="button-manager">Reset</button>
    </div>
    <div className = "h3-style-manager">
      <h3>Allowed JPG, GIF, or PNG. Max size of 1MB.</h3>
    </div>
    </div>
    
    
</div>

    
    
  
          <form onSubmit={handleSubmit} className="form-manager">
            <div className ="left-section-editor-manager">
            <div className="left-section-manager">
              <div className="input-group-manager">
                <label className="label-manager">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
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
                <label className="label">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="select-manager"
                >
                  <option value="Manager">Manager</option>
                  <option value="Employee">Employee</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
            </div>
            <div className="right-section-manager">
              <div className="input-group-manager">
                <label className="label-manager">Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
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
                <div className="change-button-manager">
                <button type="button" className="button-manager">Change</button>
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
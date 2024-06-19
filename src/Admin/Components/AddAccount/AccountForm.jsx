import React, { useState } from 'react';
import './AccountForm.scss';

const AccountForm = ({ onSave }) => {
  const [accountData, setAccountData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    birthDate: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(accountData);
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer-admin">
      <div className="formBox-admin">
        <div className="formRow-admin">
          <div className="formInput-admin">
            <label>ID:</label>
            <input type="text" name="id" value={accountData.id} onChange={handleChange} />
          </div>
          <div className="formInput-admin">
            <label>Name:</label>
            <input type="text" name="name" value={accountData.name} onChange={handleChange} />
          </div>
        </div>
        <div className="formRow-admin">
          <div className="formInput-admin">
            <label>Email:</label>
            <input type="email" name="email" value={accountData.email} onChange={handleChange} />
          </div>
          <div className="formInput-admin">
            <label>Password:</label>
            <input type="password" name="password" value={accountData.password} onChange={handleChange} />
          </div>
        </div>
        <div className="formRow-admin">
          <div className="formInput-admin">
            <label>Birth Date:</label>
            <input type="date" name="birthDate" value={accountData.birthDate} onChange={handleChange} />
          </div>
          <div className="formInput-admin">
            <label>Role:</label>
            <input type="text" name="role" value={accountData.role} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="submitButton-admin">Save Account</button>
      </div>
    </form>
  );
};

export default AccountForm;

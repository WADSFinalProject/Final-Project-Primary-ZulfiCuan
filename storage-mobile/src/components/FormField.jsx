import React from 'react'
import { icons } from '../constants'
import { useState } from 'react'

const FormField = ({ title, value, handleChangeText, textStyles, showIcon, icon, otherStyles, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`space-y-2 ${otherStyles}`}>
      <div className='w-full h-12 px-4 bg-secondary rounded-2xl
      border-2 border-primary flex items-center flex-row'>
        {showIcon === 'True' && (
        <img
        src={icon}
        alt="icon"
        className="w-5 h-5 mr-4"
        style={{ objectFit: 'contain'}}
        />
        )}

        <input
          className={`${textStyles}`}
          type={title === 'Password' && !showPassword ? 'password' : 'text'}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeText}
        />

        {title === 'Password' && (
          <button onClick={() => setShowPassword(!showPassword)}>
            <img 
              src={!showPassword ? icons.eyeHide : icons.eye}
              alt={!showPassword ? "Hide Password" : "Show Password"}
              className="w-6 h-6"
              style={{ objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(89%) sepia(24%) saturate(285%) hue-rotate(53deg) brightness(93%) contrast(87%)' }}
            />
          </button>
        )}


      </div>
    </div>
  )
}

export default FormField
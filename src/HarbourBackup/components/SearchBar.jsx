import React from 'react'
import { icons } from '../constants'

const SearchBar = ({ value, handleChangeText, otherStyles}) => {

  return (
    <div className={`z-10 space-y-2 px-4 pb-2 ${otherStyles}`}>
      <div className='w-full h-8 px-3 bg-offwhite rounded-2xl
      border-2 border-secondary flex items-center flex-row'>

        <img
        src={icons.xyzSearch}
        alt="Search"
        className="w-4 h-4 mr-2"
        style={{ objectFit: 'contain'}}
        />

        <input
          className="flex-1 font-hnroman text-sm bg-offwhite"
          value={value}
          placeholder="Search"
          onChange={handleChangeText}
        />

      </div>
    </div>
  )
}

export default SearchBar
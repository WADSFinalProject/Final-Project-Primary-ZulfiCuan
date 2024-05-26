import React from 'react'
import { icons, images } from '../constants'
import BottomTab from '../components/BottomTab'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'

function Rescale() {

  return (
    <div className='min-h-screen'>
        <div className='items-start flex items-center py-3 px-4 bg-primary'>
            <img 
                src={images.xyzPfp}
                alt="Profile Picture"
                className='w-10 h-10'
                style={{ objectFit: 'contain'}}
            />

            <div className="ml-2">
                <p className="font-hnroman text-xs text-secondary">
                  Welcome,
                </p>

                <p className="text-base font-hnbold text-secondary">
                  John Doe
                </p>
            </div>

            <Link to="/notifications" className="ml-auto">
                <img 
                    src={icons.xyzNotifications}
                    alt="Notifications"
                    className="w-7 h-7"
                    style={{ objectFit: 'contain'}}
                />
            </Link>
        </div>

        <p className='text-secondary text-2xl font-hnbold py-3 px-4 bg-offwhite'>
            Rescaling Packages
        </p>

        <SearchBar 
        otherStyles="bg-offwhite"
        />
        

        <BottomTab />
    </div>   
  )
}

export default Rescale
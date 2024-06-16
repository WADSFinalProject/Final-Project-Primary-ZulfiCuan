import React from 'react'
import { useState, useEffect } from 'react'
import { icons } from '../constants'
import Popup from 'reactjs-popup'
import PopUpForm from './PopUpForm'
import SpinningHourglass from './SpinningHourglass'

function RescaleLists() {

    const [isRescaledScreen, setIsRescaledScreen] = useState(false)

    const packageList= [
        {id: 1, title: "Package 247-F", provider: "Indonesia's Military", weight: 10, batchID: "F24, F25", date: "05/02/2024", expiryDate: "05/02/2024", rescaled: false},
        {id: 2, title: "Package 244-F", provider: "Indonesia's Military", weight: 20, batchID: "F24, F25", date: "05/02/2024", expiryDate: "05/02/2024", rescaled: true},
        {id: 3, title: "Package 243-F", provider: "Indonesia's Military", weight: 10, batchID: "F24, F25", date: "05/02/2024", expiryDate: "05/02/2024", rescaled: true},
        {id: 4, title: "Package 248-G", provider: "Red Cross Indonesia", weight: 15, batchID: "G24, G25", date: "06/02/2024", expiryDate: "06/02/2024", rescaled: false},
        {id: 5, title: "Package 252-A", provider: "Indonesia's Military", weight: 12, batchID: "A24, A25", date: "08/02/2024", expiryDate: "08/02/2024", rescaled: false},
        {id: 6, title: "Package 242-G", provider: "Red Cross Indonesia", weight: 15, batchID: "G24, G25", date: "06/02/2024", expiryDate: "06/02/2024", rescaled: false},
        {id: 7, title: "Package 261-F", provider: "Indonesia's Military", weight: 14, batchID: "F24, F25", date: "05/02/2024", expiryDate: "05/02/2024", rescaled: true},
        {id: 8, title: "Package 247-F", provider: "Indonesia's Military", weight: 10, batchID: "F24, F25", date: "05/02/2024", expiryDate: "05/02/2024", rescaled: false},
        {id: 9, title: "Package 244-F", provider: "Indonesia's Military", weight: 20, batchID: "F24, F25", date: "05/02/2024", expiryDate: "05/02/2024", rescaled: true},
        {id: 10, title: "Package 243-F", provider: "Indonesia's Military", weight: 10, batchID: "F24, F25", date: "05/02/2024", expiryDate: "05/02/2024", rescaled: true},
        {id: 11, title: "Package 248-G", provider: "Red Cross Indonesia", weight: 15, batchID: "G24, G25", date: "06/02/2024", expiryDate: "06/02/2024", rescaled: false},
        {id: 12, title: "Package 252-A", provider: "Indonesia's Military", weight: 12, batchID: "A24, A25", date: "08/02/2024", expiryDate: "08/02/2024", rescaled: false},
        {id: 13, title: "Package 242-G", provider: "Red Cross Indonesia", weight: 15, batchID: "G24, G25", date: "06/02/2024", expiryDate: "06/02/2024", rescaled: false},
        {id: 14, title: "Package 261-F", provider: "Indonesia's Military", weight: 14, batchID: "F24, F25", date: "05/02/2024", expiryDate: "05/02/2024", rescaled: true},
    ]

  return (
    <div className='mt-40 flex flex-1 flex-col'>
        <div className='z-10 fixed w-full container h-8 flex bg-offwhite'>
            <button 
            className={`flex-1 rounded-t-xl border-2 border-offwhite-200 border-b-0 ${isRescaledScreen === false ? 'bg-offwhite-100' : 'bg-offwhite'}`}
            onClick={() => setIsRescaledScreen (false)}>
                <p className={`${isRescaledScreen === false && 'underline'} font-hnmedium text-xs text-secondary`}>
                Pending Rescale
                </p>
            </button>

            <button 
            className={`flex-1 rounded-t-xl bg-offwhite border-2 border-offwhite-200 border-b-0 ${isRescaledScreen === true ? 'bg-offwhite-100' : 'bg-offwhite'}`}
            onClick={() => setIsRescaledScreen (true)}>
                <p className={`${isRescaledScreen === true && 'underline'} font-hnmedium text-xs text-secondary`}>
                Rescaled
                </p>
            </button>
        </div>
        
        <div className='mt-8 flex flex-1 flex-col items-center overflow-y-hidden bg-offwhite-100 pt-2 pb-[11vh]'>
            {isRescaledScreen === false &&
                packageList.filter(item => item.rescaled === false).map((item) => (
                    
                    <div className='my-1 w-[90vw] h-32 bg-secondary overflow-hidden border-offwhite-300 border-2 rounded-lg flex flex-col items-center' key={item.id}>
                        <p className='my-1 text-offwhite font-hnmedium text-xs'>{item.title}</p>

                        <div className='bg-offwhite w-full h-full flex flex-col justify-evenly px-2 py-1'>
                            <div className='flex'>
                                <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Provider</p></div>
                                <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.provider}</p></div>
                            </div>

                            <div className='flex'>
                                <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Weight</p></div>
                                <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.weight} kg</p></div>
                            </div>

                            <div className='flex'>
                                <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Batch ID</p></div>
                                <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.batchID}</p></div>
                            </div>

                            <div className='flex'>
                                <div>
                                    <div className='flex'>
                                        <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Date</p></div>
                                        <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                        <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.date}</p></div>
                                    </div>

                                    <div className='flex'>
                                        <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Expiry Date</p></div>
                                        <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                        <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.expiryDate}</p></div>
                                    </div>
                                </div>
                                
                                <Popup trigger=
                                {<button className='ml-auto rounded-lg w-20 h-7 bg-ornge flex justify-evenly items-center'>
                                    <p className='font-hnmedium text-xs text-offwhite'>Rescale</p>
                                    <SpinningHourglass />
                                </button>}
                                modal nested>
                                    {
                                        close => (
                                            <div className='fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-50'>
                                                <div className='flex flex-col h-[45vh] w-[80vw] border-2 border-offwhite-100 rounded-xl bg-offwhite'>
                                                    <p className='mx-5 font-hnbold text-xl text-secondary my-4'>
                                                        Input Rescale
                                                    </p>

                                                    <div className='mt-1 flex'>
                                                        <p className='ml-5 font-hnroman text-md text-secondary'>
                                                            Initial Weight :
                                                        </p>
                                                        <p className='ml-2 font-hnbold text-md text-secondary'>
                                                            {item.weight} kg
                                                        </p>
                                                    </div>

                                                    <p className='ml-5 mt-3 font-hnroman text-md text-secondary'>
                                                        Rescale Weight :
                                                    </p>

                                                    <PopUpForm 
                                                    value={item.weight}
                                                    onWeightChange=''
                                                    />

                                                    <div className='mx-4 flex items-center justify-evenly mt-auto mb-4'>
                                                        <button 
                                                        onClick={() => close()}
                                                        className='rounded-3xl mx-1 flex-grow h-12 border-2 border-secondary bg-offwhite flex items-center justify-center'>
                                                            <p className='text-base font-hnmedium text-secondary'>Cancel</p>
                                                        </button>

                                                        <button
                                                        onClick={() => close()}
                                                        className='rounded-3xl mx-1 flex-grow h-12 border-2 border-secondary bg-secondary flex items-center justify-center'>
                                                            <p className='text-base font-hnmedium text-offwhite'>Confirm</p>
                                                        </button>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                </Popup>
                            </div>
                            
                        </div>

                    </div>
                    
                ))
            }

            {isRescaledScreen === true &&
                packageList.filter(item => item.rescaled === true).map((item) => (
                    
                    <div className='my-1 w-[90vw] h-32 bg-primary-100 overflow-hidden border-offwhite-300 border-2 rounded-lg flex flex-col items-center' key={item.id}>
                        <p className='my-1 text-offwhite font-hnmedium text-xs'>{item.title}</p>

                        <div className='bg-offwhite w-full h-full flex flex-col justify-evenly px-2 py-1'>
                            <div className='flex'>
                                <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Provider</p></div>
                                <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.provider}</p></div>
                            </div>

                            <div className='flex'>
                                <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Weight</p></div>
                                <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.weight} kg</p></div>
                            </div>

                            <div className='flex'>
                                <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Batch ID</p></div>
                                <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.batchID}</p></div>
                            </div>

                            <div className='flex'>
                                <div>
                                    <div className='flex'>
                                        <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Date</p></div>
                                        <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                        <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.date}</p></div>
                                    </div>

                                    <div className='flex'>
                                        <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Expiry Date</p></div>
                                        <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                        <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.expiryDate}</p></div>
                                    </div>
                                </div>
                                
                                <Popup trigger=
                                {<button className='ml-auto rounded-lg w-16 h-7 bg-ornge flex justify-evenly items-center'>
                                    <p className='font-hnmedium text-xs text-offwhite'>Edit</p>
                                    <SpinningHourglass />
                                </button>}
                                modal nested>
                                    {
                                        close => (
                                            <div className='fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-50 '>
                                                <div className='flex flex-col h-[45vh] w-[80vw] border-2 border-offwhite-100 rounded-xl bg-offwhite'>
                                                    <p className='mx-5 font-hnbold text-xl text-secondary my-4'>
                                                        Edit Rescale
                                                    </p>

                                                    <div className='mt-1 flex'>
                                                        <p className='ml-5 font-hnroman text-md text-secondary'>
                                                            Current Weight :
                                                        </p>
                                                        <p className='ml-2 font-hnbold text-md text-secondary'>
                                                            {item.weight} kg
                                                        </p>
                                                    </div>

                                                    <p className='ml-5 mt-3 font-hnroman text-md text-secondary'>
                                                        Rescale Weight :
                                                    </p>

                                                    <PopUpForm 
                                                    value={item.weight}
                                                    onWeightChange=''
                                                    />

                                                    <div className='mx-4 flex items-center justify-evenly mt-auto mb-4'>
                                                        <button 
                                                        onClick={() => close()}
                                                        className='rounded-3xl mx-1 flex-grow h-12 border-2 border-primary-100 bg-offwhite flex items-center justify-center'>
                                                            <p className='text-base font-hnmedium text-primary-100'>Cancel</p>
                                                        </button>

                                                        <button
                                                        onClick={() => close()}
                                                        className='rounded-3xl mx-1 flex-grow h-12 border-2 border-primary-100 bg-primary-100 flex items-center justify-center'>
                                                            <p className='text-base font-hnmedium text-offwhite'>Confirm</p>
                                                        </button>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                </Popup>
                            </div>
                            
                        </div>

                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default RescaleLists
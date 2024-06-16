import React from 'react'
import { useState, useEffect } from 'react'
import UnrescaledStorageList from './UnrescaledStorageList'
import RescaledStorageList from './RescaledStorageList'
import { icons } from '../constants'
import Popup from 'reactjs-popup'
import PopUpForm from './PopUpForm'
import SpinningHourglass from './SpinningHourglass'
import axios from 'axios'

function RescaleLists() {

    const [isRescaledScreen, setIsRescaledScreen] = useState(false)

    // const [packageList, setPackageList] = useState([]);

    // useEffect(() => {
    //     // Fetch package list data from the backend when the component mounts
    //     fetchPackageList();
    // }, []);

    const [allStorage, setAllStorage] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:8000/storages')
      .then(response => {
        setAllStorage(response.data.all_storage);
      })
      .catch(error => {
        console.error('Error fetching storage data:', error);
      });
    }, []);

    // async function fetchPackageList() {
    //     try {
    //         const response = await axios.get('http://localhost:8000/storages');
    //         // Convert the response data to an array of package objects
    //         const packageArray = Object.values(response.data).map((item) => ({
    //             idShipment: item.idShipment,
    //             title: "Package " + item.idShipment,
    //             rescaledDate: item.rescaledDate,
    //             timeCreated: item.timeCreated,
    //             provider: item.provider,
    //             idStorage: item.idStorage,
    //             weight: item.weight,
    //             isRescaled: item.isRescaled,
    //             expiredDate: item.expiredDate
    //         }));
    //         setPackageList(packageArray);
    //         console.log(packageArray);
    //     } catch (error) {
    //         console.error('Error fetching package list:', error);
    //     }
    // }

  return (
    <div className='mt-40 flex flex-1 flex-col'>
        <div className='fixed w-full container h-8 flex bg-offwhite'>
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

            {isRescaledScreen === false && <UnrescaledStorageList allStorage={allStorage} />}
            {isRescaledScreen && <RescaledStorageList allStorage={allStorage} />}
            {/* {isRescaledScreen === false &&
                packageList.filter(item => item.isRescaled === false).map((item) => (
                    
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
                                <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Storage ID</p></div>
                                <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.idStorage}</p></div>
                            </div>

                            <div className='flex'>
                                <div>
                                    <div className='flex'>
                                        <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Date Created</p></div>
                                        <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                        <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.timeCreated}</p></div>
                                    </div>

                                    <div className='flex'>
                                        <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Expiry Date</p></div>
                                        <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                        <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.expiredDate}</p></div>
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
                packageList.filter(item => item.isRescaled === true).map((item) => (
                    
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
                                <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Storage ID</p></div>
                                <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.idStorage}</p></div>
                            </div>

                            <div className='flex'>
                                <div>
                                    <div className='flex'>
                                        <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Rescaled Date</p></div>
                                        <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                        <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.rescaledDate}</p></div>
                                    </div>

                                    <div className='flex'>
                                        <div className='w-20 h-4'><p className='text-secondary font-hnroman text-xs'>Expiry Date</p></div>
                                        <div className='w-2 h-4'><p className='text-secondary font-hnroman text-xs'>:</p></div>
                                        <div className='flex-grow h-4'><p className='text-secondary font-hnroman text-xs'>{item.expiredDate}</p></div>
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
            } */}
        </div>
    </div>
  )
}

export default RescaleLists
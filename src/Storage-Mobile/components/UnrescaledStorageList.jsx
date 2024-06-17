import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import PopUpForm from './PopUpForm';
import SpinningHourglass from './SpinningHourglass';
import axios from 'axios';

function UnrescaledStorageList({ allStorage }) {
  const [newWeight, setNewWeight] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);

  const onWeightChange = (newWeight) => {
    setNewWeight(newWeight);
  };

  const updateWeight = (selectedStorage) => {
    const weightInt = parseInt(newWeight.value, 10); // Parse weight into an integer
    console.log(weightInt);
    axios.put(`http://localhost:8000/storages/put/${selectedStorage.idStorage}`, 
        { weight: weightInt }
    )
      .then((response) => {
        // Handle success, if needed
        console.log('Weight updated successfully:', response.data);
        // You can also update the state or perform any other actions after successful update
      })
      .catch((error) => {
        // Handle error, if needed
        console.error('Error updating weight:', error);
      });
  };
  

  useEffect(() => {
    if (newWeight !== null && selectedStorage !== null) {
      // Perform actions after weight update
      console.log('New weight:', newWeight);
      console.log('Selected storage:', selectedStorage);
      // Add any other actions you want to perform here
    }
  }, [newWeight, selectedStorage]);

  return (
    <>
      {allStorage
        .filter((storage) => !storage.isRescaled)
        .map((storage) => (
          <div
            className='my-1 w-[90vw] h-32 bg-secondary overflow-hidden border-offwhite-300 border-2 rounded-lg flex flex-col items-center'
            key={storage.idShipment}
          >
            <p className='my-1 text-offwhite font-hnmedium text-xs'>
              Package {storage.idShipment}
            </p>

            <div className='bg-offwhite w-full h-full flex flex-col justify-evenly px-2 py-1'>
              <div className='flex'>
                <div className='w-20 h-4'>
                  <p className='text-secondary font-hnroman text-xs'>Provider</p>
                </div>
                <div className='w-2 h-4'>
                  <p className='text-secondary font-hnroman text-xs'>:</p>
                </div>
                <div className='flex-grow h-4'>
                  <p className='text-secondary font-hnroman text-xs'>{storage.provider}</p>
                </div>
              </div>

              <div className='flex'>
                <div className='w-20 h-4'>
                  <p className='text-secondary font-hnroman text-xs'>Weight</p>
                </div>
                <div className='w-2 h-4'>
                  <p className='text-secondary font-hnroman text-xs'>:</p>
                </div>
                <div className='flex-grow h-4'>
                  <p className='text-secondary font-hnroman text-xs'>{storage.weight} kg</p>
                </div>
              </div>

              <div className='flex'>
                <div className='w-20 h-4'>
                  <p className='text-secondary font-hnroman text-xs'>Storage ID</p>
                </div>
                <div className='w-2 h-4'>
                  <p className='text-secondary font-hnroman text-xs'>:</p>
                </div>
                <div className='flex-grow h-4'>
                  <p className='text-secondary font-hnroman text-xs'>{storage.idStorage}</p>
                </div>
              </div>

              <div className='flex'>
                <div>
                  <div className='flex'>
                    <div className='w-20 h-4'>
                      <p className='text-secondary font-hnroman text-xs'>Arrival Date</p>
                    </div>
                    <div className='w-2 h-4'>
                      <p className='text-secondary font-hnroman text-xs'>:</p>
                    </div>
                    <div className='flex-grow h-4'>
                      <p className='text-secondary font-hnroman text-xs'>
                        {formatDate(storage.arrival)}
                      </p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='w-20 h-4'>
                      <p className='text-secondary font-hnroman text-xs'>Expiry Date</p>
                    </div>
                    <div className='w-2 h-4'>
                      <p className='text-secondary font-hnroman text-xs'>:</p>
                    </div>
                    <div className='flex-grow h-4'>
                      <p className='text-secondary font-hnroman text-xs'>
                        {formatDate(storage.expiredDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <Popup
                  trigger={
                    <button className='ml-auto rounded-lg w-20 h-7 bg-ornge flex justify-evenly items-center'>
                      <p className='font-hnmedium text-xs text-offwhite'>Rescale</p>
                      <SpinningHourglass />
                    </button>
                  }
                  modal
                  nested
                  onOpen={() => {
                    setSelectedStorage(storage);
                    console.log('Rescale menu opened for storage:', storage);
                  }}
                >
                  {(close) => (
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
                            {storage.weight} kg
                          </p>
                        </div>

                        <p className='ml-5 mt-3 font-hnroman text-md text-secondary'>
                          Rescale Weight :
                        </p>

                        <PopUpForm
                          onChange={(e) => onWeightChange({ value: e.target.value })}
                          placeholder={storage.weight}
                        />

                        <div className='mx-4 flex items-center justify-evenly mt-auto mb-4'>
                          <button
                            onClick={() => close()}
                            className='rounded-3xl mx-1 flex-grow h-12 border-2 border-secondary bg-offwhite flex items-center justify-center'
                          >
                            <p className='text-base font-hnmedium text-secondary'>Cancel</p>
                          </button>

                          <button
                            onClick={() => {
                                console.log(selectedStorage)
                              updateWeight(selectedStorage);
                              close();
                            }}
                            className='rounded-3xl mx-1 flex-grow h-12 border-2 border-secondary bg-secondary flex items-center justify-center'
                          >
                            <p className='text-base font-hnmedium text-offwhite'>Confirm</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

function formatDate(dateTimeString) {
  const date = new Date(dateTimeString);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return date.toLocaleDateString(undefined, options); // This will format the date as dd/mm/yyyy
}

export default UnrescaledStorageList;

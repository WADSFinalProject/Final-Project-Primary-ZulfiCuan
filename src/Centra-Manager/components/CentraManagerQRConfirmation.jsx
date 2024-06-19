/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function CentraManagerQRConfirmation({data, setNavigation, previousState}) {
    console.log(data)
  return (
    <div className='CentraManagerAddNewContainer'>
        <div>
            {data}
        </div>
        <div className='CentraManagerAddNewButtonContainers'>
            <div className='CentraManagerAddNewButtonCancelContainer' onClick={() => setNavigation(previousState)}>Cancel</div>
            <div className='CentraManagerAddNewButtonAddContainer'>Add</div>
        </div>
    </div>
  )
}

export default CentraManagerQRConfirmation
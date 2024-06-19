/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function CentraManagerQRConfirmation({data, setNavigation, previousState}) {
  return (
    <div className='CentraManagerAddNewContainer'>
        <div>
            {data['type']}
        </div>
        <div className='CentraManagerAddNewButtonContainers'>
            <div className='CentraManagerAddNewButtonCancelContainer' onClick={() => setNavigation(previousState)}>Cancel</div>
            <div className='CentraManagerAddNewButtonAddContainer'>Save</div>
        </div>
    </div>
  )
}

export default CentraManagerQRConfirmation
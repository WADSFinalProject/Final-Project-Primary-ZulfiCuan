// eslint-disable-next-line react/prop-types
function HomeIcon({NavigationState, setNavigationState}) {
    return (
      <div className="HomeIconMainContainer" onClick={setNavigationState([true, false, false, false, false])}>
          <div>Home</div>
      </div>
    )
  }
  
  export default HomeIcon
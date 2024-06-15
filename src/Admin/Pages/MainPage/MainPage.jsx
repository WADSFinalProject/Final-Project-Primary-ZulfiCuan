import useTogglePages from "../PageHandler/useTogglePages.jsx"
// import Storage from "../Storage/Storage.jsx"
// import Notifications from "../Notifications/Notifications.jsx"
import Dashboard from "../Home/Dashboard.jsx"
import Account from "../Account/Account.jsx"

export const pageLogic = [
  [true ,false], // rescale page, notification page
  [false], //account-page
]

function MainPage() {

  const [pages, togglePage] = useTogglePages(pageLogic);

  return (
            <div>
                {pages[0][0] && <Dashboard />}
                {pages[0][1] && <Account/>}
            </div>
  )
}

export default MainPage
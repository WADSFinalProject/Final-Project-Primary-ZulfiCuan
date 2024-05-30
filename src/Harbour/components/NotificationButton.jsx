import '../css/NotificationButton.css'

// eslint-disable-next-line react/prop-types
function NotificationButton() {
  return (
    <div className="NotificationButtonContainer">
        <span className='NotificationText'>1</span>
        <img src="src/Harbour/assets/notification.svg" className="NotificationButton"></img>
        <div className="NotificationBubble"></div>
    </div>
  )
}

export default NotificationButton
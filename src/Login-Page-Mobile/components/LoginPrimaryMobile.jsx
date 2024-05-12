import '../css/LoginPageMobile.css'
import PasswordInputMobile from './PasswordInputMobile.jsx'
import TextInputMobile from './TextInputMobile.jsx'

function LoginPrimaryMobile() {
  return (
    <div className='LoginPrimaryCase'>
        <form className='LoginPrimaryMobileForm'>
            <p className='LoginPageMobileTitle'>Login</p>
            <TextInputMobile label={'Email'} />
            <PasswordInputMobile label={'Password'}/>
            <p className='LoginPageMobileSubText'>Forgot Password?</p>
            <button type='submit' className='LoginPageMobileButton'>Login</button>
        </form>
    </div>
  )
}

export default LoginPrimaryMobile
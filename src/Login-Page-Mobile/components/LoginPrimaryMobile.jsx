import '../css/LoginPageMobile.css'
import ButtonInputMobile from './ButtonInputMobile.jsx'
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
            <ButtonInputMobile label={"Login"}/>
        </form>
    </div>
  )
}

export default LoginPrimaryMobile
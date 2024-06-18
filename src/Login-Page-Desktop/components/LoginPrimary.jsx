import '../css/LoginPage.css'
import RegisterText from './RegisterText'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'
// import TextInput from './TextInput'

// eslint-disable-next-line react/prop-types
function LoginPrimary({click, currentState}) {
  return (
    <div>
      <form className='LoginContainer'>
        <label className='TitleLogin'>Login</label>
        <TextInput label={"Email / Username"} color={'#1976d2'}/>
        <PasswordInput label="Password" color={'#1976d2'}/>
        {/* <TextInput placeHolder={'Email / Username'} imgSRC={'src/assets/images/Emailcon.svg'} type={'Text'}/>
        <TextInput placeHolder={'Password'} imgSRC={'src/assets/images/LockIcon.svg'} type={"Password"}/> */}
        <div className='ExtraButtons'>
          <div className='RememberMe'>
            <label className='CheckText'>
              <input type='checkbox' className='TickBox'></input>Remember Me
            </label>
          </div>
          <div className='ForgotPassword'>Forgot Password?</div>
        </div>
        <button type='submit' className='LoginButton'>Login</button>
        <label className='ShowTextLogin'>{`Don't have an account?`} <RegisterText handleClick={click} status={currentState} showText={'Register'}/></label>
      </form>
    </div>
  )
}

export default LoginPrimary
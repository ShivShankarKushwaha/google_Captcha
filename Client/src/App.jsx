import React, { useRef } from 'react';
import config from './config';
import Recaptcha from 'react-google-recaptcha';

function App() {
  const [formdata, setFormdata] = React.useState({ username: '', password: '', captcha: '' });
 const captchaRef = useRef(null);
  function handleCaptcha(value) {
    setFormdata({ ...formdata, captcha: value });
  }

  function FormHandle(e) {
    e.preventDefault();
    fetch('/api/login', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify(formdata),})
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => {setFormdata({ username: '', password: '', captcha: '' });captchaRef.current.reset()});
  }

  return (
    <div className='w-full'>
      <form className='flex flex-col gap-5 w-1/2 m-auto border-2 my-5 p-5' onSubmit={(e) => {FormHandle(e);}}>
        <input className='border-2 p-1' type='text' placeholder='Enter Username' value={formdata.username} onChange={(e) => {   setFormdata({ ...formdata, username: e.target.value }); }}/>
        <input className='border-2 p-1' type='password' placeholder='Enter password' value={formdata.password} onChange={(e) => {   setFormdata({ ...formdata, password: e.target.value }); }}/>
        <Recaptcha ref={captchaRef} sitekey={config.CAPTCHA_SITE_KEY} onChange={(value) => handleCaptcha(value)} />
        <input className='border-2 p-1 bg-blue-500 text-white cursor-pointer active:bg-blue-800' type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default App;

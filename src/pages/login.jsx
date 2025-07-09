import React from 'react';
import './login.css';
import logobrand from '../assets/brand-logo.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import googleLogo from '../assets/google-icon.svg';

function Login() {
  return (
    <div className="login-page bg-gray-100 h-screen flex items-center justify-center">
      <div className="form-container bg-white p-8 rounded-lg shadow-md w-96">
        <form>
          <img src={logobrand} alt="Brand Logo" className="mx-auto mb-6 w-45" />
          
          <div className="mb-5">
            <TextField
              variant="outlined"
              type="text"
              label="Email"
              fullWidth
            />
          </div>

          <div className="mb-5">
            <TextField
              variant="outlined"
              type="password"
              label="Password"
              fullWidth
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            className="!bg-gray-900 !font-semibold !text-white w-full py-3 rounded-lg hover:!bg-black mt-5"
          >
            Login
          </Button>

          {/* Garis kiri kanan dan teks ATAU */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-4 text-gray-500">ATAU</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>
            <Button variant='outlined' className='!text-gray-900 border !border-black !capitalize w-full py-3 rounded-lg hover:!bg-gray-200'> <img src={googleLogo} alt="Google Icon" className="w-7 h-7" /> Lanjutkan dengan Google </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

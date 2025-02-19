import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginpic from '../assets/login_img.png';
import fblogo from '../assets/fb-button.png';
import gglogo from '../assets/gg-button.png';
import aplogo from '../assets/apple-button.png'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './OwnerLogin.css';

const OwnerLogin = () => {
    const BACK_END_BASE_URL = import.meta.env.VITE_API_BACK_END_BASE_URL;

    const handleGoogleLogin = () => {
        console.log("Google login clicked");
        window.location.href = `${BACK_END_BASE_URL}/auth/stallowner/google`;
    };

    const handleFacebookLogin = () => {
        console.log("Facebook login clicked");
    };

    const handleAppleLogin = () => {
        console.log("Apple login clicked");
    };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 p-0 m-0">
            <img src={loginpic} alt="" className="img-fluid my-4 mx-auto d-flex" style={{ width: '80vw', height: '70vw' }} />
            <p className="display-1 text-white my-4 font-weight-login" style={{ fontSize: '8vw' }}>Let’s You In</p>
            <div className="card-body d-flex flex-column">
                <button
                    className="btn mb-4 text-white" style={{ width: '90vw', height: '14vw', background: '#01040F', borderRadius: '2.8vw', fontSize: '3.5vw', fontWeight: '500' }}
                    onClick={handleFacebookLogin}
                >
                    <img src={fblogo} alt="" style={{ width: '6.9vw', height: '6.9vw', marginRight: '3.5vw', alignItems: 'center' }} />
                    Continue with Facebook
                </button>
                <button
                    className="btn mb-4 text-white" style={{ width: '90vw', height: '14vw', background: '#01040F', borderRadius: '2.8vw', fontSize: '3.5vw', fontWeight: '500' }}
                    onClick={handleGoogleLogin}
                >
                    <img src={gglogo} alt="" style={{ width: '6.9vw', height: '6.9vw', marginRight: '3.5vw', alignItems: 'center' }} />
                    Continue with Google
                </button>
                <button
                    className="btn mb-4 text-white" style={{ width: '90vw', height: '14vw', background: '#01040F', borderRadius: '2.8vw', fontSize: '3.5vw', fontWeight: '500' }}
                    onClick={handleAppleLogin}
                >
                    <img src={aplogo} alt="" style={{ width: '6.9vw', height: '6.9vw', marginRight: '3.5vw', alignItems: 'center' }} />
                    Continue with Apple
                </button>
                <div className="d-flex align-items-center text-center mb-3 text-white">
                    <hr className='flex-fill' style={{ borderColor: 'white', height: '0.2vw' }} />
                    <span className='mx-2' style={{ fontSize: '3vw' }}>or</span>
                    <hr className='flex-fill' style={{ borderColor: 'white', height: '0.2vw' }} />
                </div>
                <button className="btn mb-4 text-white" style={{ width: '90vw', height: '14vw', background: '#02C543', borderRadius: '4vw', fontSize: '3.5vw', fontWeight: '500' }}>
                    Sign in with Contact Number
                </button>
                <div className="text-center">
                    <p className="text-white" style={{ fontSize: '3vw' }}> Create an account {' > '} <a href="/signup" className="text-success"> Sign Up </a></p>
                </div>
            </div>
        </div>
  )
}

export default OwnerLogin;
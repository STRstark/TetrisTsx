import React from 'react';
import { Link } from 'react-router-dom';
import Game from 'components/App.';

const Menu = () => {
  const token = localStorage.getItem('accessToken');
  
  return (
    <div style={{transform : "scale(2.5)"}} >
      {!token ? (
        <form action="" className='form'>
          <Link className="oauthButton" to="/SignIn">
            ورود حساب کاربری
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5"></path>
              <path d="m13 17 5-5-5-5"></path>
            </svg>
          </Link>
          <Link className="oauthButton" to="/SignUp">
            ساخت حساب کاربری
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5"></path>
              <path d="m13 17 5-5-5-5"></path>
            </svg>
          </Link>
        </form>
      ) : (
        <>
          <form action="" className="form">
          <Link className="oauthButton" to="/Game">
            ورود به بازی
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2" // Corrected from stroke-width
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5"></path>
              <path d="m13 17 5-5-5-5"></path>
            </svg>
          </Link>
          <Link className="oauthButton" to="/SignUp">
            راهنمای بازی
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2" // Corrected from stroke-width
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5"></path>
              <path d="m13 17 5-5-5-5"></path>
            </svg>
          </Link>
        </form>
        </>
      )}
    </div>
  );
};

export default Menu;

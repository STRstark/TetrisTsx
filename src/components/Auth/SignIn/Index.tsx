import React, { useState } from 'react';
import './Style.css';
const SignIn = () => {
  const [phone_number, setphone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const login = async () => {
    
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const formData = new FormData();
    formData.append('phone_number', phone_number);
    formData.append('password', password);

    const response = await fetch(
      'https://tetris-back.chbk.app/accounts/api/token/',
      {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
        headers :myHeaders
      },
    );
    console.log(response)
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    login();
  };
  return (
    <div style={{ transform: 'scale(2)' }}>
      <form action="" className="form">
        <input
          type="text"
          placeholder="شماره تلفن"
          name="phone_number"
          value={phone_number}
          onChange={(e) => setphone(e.target.value)}
        />
        <input
          type="password"
          placeholder="پسورد"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="oauthButton" onClick={handleSubmit}>
          وورد
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 17 5-5-5-5"></path>
            <path d="m13 17 5-5-5-5"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SignIn;

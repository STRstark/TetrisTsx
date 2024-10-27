import React, { useState } from 'react';
import './Style.css';
const SignUp = () => {
    const [phone_number, setphone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [full_name, setfull_name] = useState<string>("");
    const [study_field, setStudy_field] = useState<string>("");
    const [student_id, setStudent_id] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const SignUp = async () => {
        try {
            console.log("hi")
            const response = await fetch("https://tetris-back.chbk.app/accounts/api/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({phone_number , password }),
            });
            console.log(phone_number)
            console.log(password)
            console.log(response)
            if (!response.ok) {
                throw new Error("Login failed");
            }   

            const data = await response.json();
            const { accessToken, refreshToken } = data;
            // local
            console.log("Access Token:", accessToken);
            console.log("Refresh Token:", refreshToken);

        } catch (error) {
            setError("Invalid login credentials.");
            console.error("Login error:", error);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        SignUp();
    };
  return (
    <div style={{transform : "scale(2.5)"}}>
      <form action="" className="form">

        <input
          type="text"
          placeholder="نام کامل"
          name="Name"
          value={full_name}
          onChange={(e) => setfull_name(e.target.value)}
        />
        <input
          type="number"
          placeholder="شماره دانشچویی"
          name="stdnumber"
          value={student_id}
          onChange={(e) => setStudent_id(e.target.value)}
        />
        <input
          type="text"
          placeholder="رشته تحصیلی"
          name="email"
          value={study_field}
          onChange={(e) => setStudy_field(e.target.value)}
        />
         <input
          type="text"
          placeholder="شماره تلفن"
          name="email"
          value={phone_number}
          onChange={(e) => setphone(e.target.value)}
        />
        <input
          type="email"
          placeholder="ایمیل"
          name="email"
          value={phone_number}
          onChange={(e) => setphone(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="oauthButton" onClick={handleSubmit}>
          ثبت نام
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

export default SignUp;

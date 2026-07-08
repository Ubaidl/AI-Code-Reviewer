
import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router";
import { Link } from "react-router";
// import "../style/auth.css";

const Login = ()=> {
  const navigate = useNavigate();

  const {handlelogin}= useAuth();

  const [email,setemail]= useState("");
  const [password,setpassword]= useState("");
  

const handlesubmit = async(e)=>{
  e.preventDefault()
  try {
    await handlelogin({email,password});
    navigate("/")
    
  } catch (error) {
    alert("login failed");
    
  }
}

  return (
    <div className="auth-page">
      <div className="auth-card">
        <span className="auth-card__eyebrow">Welcome back</span>
        <h1 className="auth-card__title">Log in</h1>
        <p className="auth-card__subtitle">
          Enter your details to access your account.
        </p>

        <form className="auth-form" onSubmit={handlesubmit}>
          <div className="auth-field">
            <label htmlFor="email" className="auth-field__label">Email</label>
            <input onChange={(e)=>setemail(e.target.value)}
              id="email"
              name="email"
              type="email"
              className="auth-field__input"
              placeholder="Enter your email"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password" className="auth-field__label">Password</label>
            <input onChange={(e)=>setpassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              className="auth-field__input"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="auth-form__submit">Log in</button>
        </form>

        <p className="auth-card__footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}


export default Login

import { useState } from "react"
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { Link } from "react-router";
// import "../style/auth.css";

const  Register= ()=> {
  const navigate = useNavigate();
  const [username,setusername]= useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]= useState("");

  const {handleregister}= useAuth();

  const handlesubmit = async(e)=>{
    e.preventDefault();
    console.log({ username, email, password });
    try{
      await handleregister({username,email,password});
      navigate("/login")

    }
    catch(error){
      alert("registration failed");
    }
    


  }


  return (
    <div className="auth-page">
      <div className="auth-card">
        <span className="auth-card__eyebrow">Create account</span>
        <h1 className="auth-card__title">Join us</h1>
        <p className="auth-card__subtitle">
          Set up your account in a few seconds.
        </p>

        <form className="auth-form" onSubmit={handlesubmit}>
          <div className="auth-field">
            <label htmlFor="username" className="auth-field__label">Username</label>
            <input onChange={(e)=>setusername(e.target.value)}
              id="username"
              name="username"
              type="text"
              className="auth-field__input"
              placeholder="Enter your username"
            />
          </div>

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

          <button type="submit" className="auth-form__submit">Register</button>
        </form>

        <p className="auth-card__footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const navi = useNavigate();
  function Close() {
    navi("/");
  }
  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')
  async function submit(e){
    e.preventDefault();
    try {
        await axios.post("http://localhost:3000/login",{
            email,password
        })
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <p>
      <div className="login_main_div">
        <div className="login_main_div1">
          <div className="login_main_div2">
            <h4>Login</h4>
            <button onClick={Close} type="button" aria-label="Close">
              X
            </button>
          </div>
          <div className="login_innerbody">
              <form action="POST" className="login_innerbody_1">
                <label>Matrimony Id/Mobile No./E-mail</label>
                <input onChange={(e)=>{setemail(e.target.value)}} type="text" />
                <label>Password</label>
                <input onChange={(e)=>{setpassword(e.target.value)}} type="password"></input>

                <div className="login_innerbody_2">
                  <input type="checkbox"></input>
                  <label>Keep me logged in</label>
                </div>
                <button onClick={submit}>LOGIN</button>
                <div className="login_innerbody_3">
                  <label>Forgot Password? | Login Via OTP</label>
                </div>
              </form>
            </div>
          </div>
        </div>
    </p>
  );
}

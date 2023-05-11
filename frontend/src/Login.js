import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Footers from "./Footers";

export default function Login() {
  const navi = useNavigate();

  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");

  function Close() {
    navi("/");
  }
  function submit() {
    var id = localStorage.getItem("userId");
    axios
      .post("http://localhost:5000/login", {
        mobile: mobile,
        password: password,
        userId: id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "login succesfully") {
          navi("/Search");
        }
      });
  }

  return (
    <p>
      <div className="login_main_div">
        <div className="login_main_div1">
          <div className="login_main_div2">
            <h2>Login</h2>
            <button onClick={Close} type="button" aria-label="Close">
              X
            </button>
          </div>
          <div className="login_innerbody">
            <form action="POST" className="login_innerbody_1">
              <label>Mobile</label>
              <input
                required
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
                type="text"
              />
              <label>Password</label>
              <input
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
              ></input>

              <div className="login_innerbody_2">
                <input type="checkbox"></input>
                <label>Keep me logged in</label>
              </div>
              <button type="button" onClick={submit}>
                LOGIN
              </button>
              <div className="login_innerbody_3">
                <label>Forgot Password? | Login Via OTP</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footers />
    </p>
  );
}

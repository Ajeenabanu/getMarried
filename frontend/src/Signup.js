import "./style.css";
import img from "./image/img.svg";
import imglogo from "./image/logo.webp";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navi = useNavigate();

  const [dob, setdob] = useState();
  const [mothertongue, setmothertongue] = useState();
  const [email, setemail] = useState();
  const[sex,setsex]=useState()

  function register() {
    var id = localStorage.getItem("userId");
    axios
      .post("http://localhost:5000/updateProfile", {
        dob: dob,
        mothertongue: mothertongue,
        email: email,
        sex:sex,
        userId: id,
      })
      .then((res) => {
        console.log(res.data);
        if(res.data === "updated succesfully") {
          navi("/Search");
        }
      });
      // navi("/Search");
  }
  return (
    <p>
      <div className="home_row1">
        <div className="home_row1_left">
          <div className="home_row_left_img">
            <img alt="" src={img}></img>
          </div>
          <div className="home_row_left_label">
            <h3>GetMarried.com</h3>
            <p>From Matrimony.com Group</p>
          </div>
        </div>
      </div>

      <div className="signup_row">
        <div className="signup_row1">
          <label>
            Great! You have completed <span> 20%</span>
          </label>
        </div>

        <div className="signup_row2">
          <div className="signup_row2_page1">
            <img alt="" src={imglogo}></img>
            <label>Trusted across the world!</label>
          </div>
          <form action="post" className="signup_row2_page2">
            <label>Please provide us with your basic details</label>
            <div className="signup_row2_page2_line1">
              <label>Date of birth</label>
              <input
                onChange={(e) => {
                  setdob(e.target.value);
                }}
                type="date"
              ></input>
            </div>
            <div className="signup_row2_page2_line1">
              <label>Mother tongue</label>
              <input
                onChange={(e) => {
                  setmothertongue(e.target.value);
                }}
              ></input>
            </div>
            <div className="signup_row2_page2_line1">
              <label>Email id</label>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div className="signup_row2_page2_line1">
            <label>Looking for</label>
            <input
              onChange={(e) => {
                setsex(e.target.value);
              }}
              type="text" placeholder="Sex"
            ></input>
          </div>
            <div className="signup_row2_page2_line3">
              <div className="">
                <button type="button" onClick={register}>CONTINUE</button>
              </div>
            </div>
          </form>
        </div>
        <div className="signup_row3">
          <label>Copyright © 2022. All rights reserved.</label>
        </div>
      </div>
    </p>
  );
}

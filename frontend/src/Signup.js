import "./style.css";
import img from "./image/img.svg";
import imglogo from "./image/logo.webp";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footers from "./Footers";

export default function Signup() {
  const navi = useNavigate();

  const [dob, setdob] = useState();
  const [mothertongue, setmothertongue] = useState();
  const [email, setemail] = useState();
  const [sex, setsex] = useState();
  const [about, setAbout] = useState();
  const [image, setImage] = useState("");

  // function handleImg(e){
  //   setImage(e.target.files[0])
  // }

  const imgUpload = (e) => {
    setImage(e.target.files[0].name);
  };
  // console.log(setImage);
  function register() {
    var id = localStorage.getItem("userId");
    axios
      .post("http://localhost:5000/updateProfile", {
        dob: dob,
        mothertongue: mothertongue,
        email: email,
        sex: sex,
        userId: id,
        about: about,
        image: image,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "updated succesfully") {
          navi("/Search");
        }
      });
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
                required
              ></input>
            </div>
            <div className="signup_row2_page2_line1">
              <label>Mother tongue</label>
              <select 
                onChange={(e) => {
                  setmothertongue(e.target.value);
                }}
                required>
                <option>select</option>

                <option value="Malayalam">Malayalam</option>
                <option value="Tamil">Tamil</option>
                <option value="Hindi">Hindi</option>
                <option value="Arabic">Arabic</option>
              </select>
            </div>
            <div className="signup_row2_page2_line1">
              <label for="email">Email id</label>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
                type="email"
                placeholder="email"
                name="email"
              ></input>
            </div>
            <div className="signup_row2_page2_line1">
              <label>Gender</label>
              <select
                onChange={(e) => {
                  setsex(e.target.value);
                }}
                required
                type="text"
                placeholder="Sex"
              >
              <option>select</option>
              <option>Male</option>
              <option>Female</option>
              <option>General</option>
              </select>
            </div>
            <div className="signup_row2_page2_line1">
              <label>Profile picture</label>
              <input
                className="signup_row2_page2_line1_img"
                onChange={imgUpload}
                autoComplete="off"
                type="file"
                name="file"
                required
              ></input>
            </div>
            <div className="signup_row2_page2_line1">
            <label>About You</label>
            <textarea rows="10" cols="30"
              onChange={(e) => {
                setAbout(e.target.value);
              }}
              required
              type="text"
              placeholder="about"
            ></textarea>
          </div>

            <div className="signup_row2_page2_line3">
              <div className="">
                <button type="button" onClick={register}>
                  CONTINUE
                </button>
              </div>
            </div>
          </form>
        </div>
        
      </div>
      <Footers/>
    </p>
  );
}

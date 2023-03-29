import "./style.css";
import img from "./image/img.svg";
import img2 from "./image/img2.webp";
import img3 from "./image/mrgimg.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  const [username, setname] = useState();
  const [usermobile, setmobile] = useState();
  const [userpassword, setpassword] = useState();

  const navi = useNavigate();
  function signup() {

    axios.post("http://localhost:5000/userRegister",{
          uname: username,
          mobile: usermobile,
          password: userpassword,
      
        }).then(res => {
          console.log(res);
          console.log(res.data);
          if(res.data.message==="registration successful"){
            localStorage.setItem("userId",res.data.userId)
            navi("/Signup")
          }
        })

  }
  function Login() {
    navi("/Login");
  }


  return (
    <p>
      <div className="home_row1">
        <div className="home_row1_left">
          <div className="home_row_left_img">
            <img alt="" src={img}></img>
          </div>
          <div className="home_row_left_label">
            <h3>ChristianMatrimony.com</h3>
            <p>From Matrimony.com Group</p>
          </div>
        </div>
        <div className="home_row1_right">
          <div className="home_row1_right_label">
            <label>Already a member?</label>
            <button onClick={Login}>Log In</button>
          </div>
        </div>
      </div>

      <div className="home_row2" style={{ backgroundImage: `url(${img3})` }}>
        <div className="home_row2_content">
          <div className="home_row2_content1">
            <h1>
              No. 1 and official matrimony service exclusively for Christians
            </h1>
            <h2>Meet your Christian soulmate here!</h2>
            <div className="home_row2_content_box1">
              <div className="home_row2_content_box2">
                <label for="uname">Name</label>
                <input
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  id="name"
                  name="uname"
                  placeholder="Name"
                  type="text"
                ></input>
              </div>
              <div className="home_row2_content_box3">
                <label for="umobile">mobile number</label>
                <input
                  onChange={(e) => {
                    setmobile(e.target.value);
                  }}
                  id="mobile"
                  name="umobile"
                  placeholder="mobile number"
                  type="text"
                ></input>
              </div>
              <div className="home_row2_content_box4">
                <label for="pswd">Password</label>
                <input
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  id="password"
                  name="pswd"
                  placeholder="password"
                  type="password"
                ></input>
              </div>
              <div className="home_row2_content_box5">
                <button onClick={signup}>Register for free</button>
              </div>
            </div>

            <div className="home_row2_content_label">
              <label>
                By clicking on Register Free, you agree to
                <span>Terms & Conditions</span>and<span>Privacy Policy</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="home_row3">
        <div className="home_row3_img1">
          <img alt="" src={img2}></img>
          <div className="home_row3_label1">
            <label>
              10+ years of service in helping Christians cherish the meaning of
              Happy marriage
            </label>
          </div>
        </div>
        <div className="home_row3_img1">
          <img
            alt=""
            src={
              "https://ansardevfactory.github.io/matrimony/static/media/ring_icon.be9d20ddb5e1f0841200.webp"
            }
          ></img>
          <div className="home_row3_label1">
            <label>
              2 Lakh+ people have found their life partner using our services
            </label>
          </div>
        </div>
        <div className="home_row3_img1">
          <img
            alt=""
            src={
              "https://ansardevfactory.github.io/matrimony/static/media/denominationshome_icon.108a508199fed8f53f38.webp"
            }
          ></img>
          <div className="home_row3_label1">
            <label>
              2020's winner of 'India's Growth Champions Award' by The Economic
              Times
            </label>
          </div>
        </div>
        <div className="home_row3_img1">
          <img
            alt=""
            src={
              "https://ansardevfactory.github.io/matrimony/static/media/genuinehome_icon.0cf7b5a30055099ea030.webp"
            }
          ></img>
          <div className="home_row3_label1">
            <label>
              1 Lakh+ genuine profiles with 100% verified phone numbers
            </label>
          </div>
        </div>
        <div className="home_row3_img1">
          <img
            alt=""
            src={
              "https://ansardevfactory.github.io/matrimony/static/media/location_icon.bc6e714ca01e573539f2.webp"
            }
          ></img>
          <div className="home_row3_label1">
            <label>130+ branches across India to serve you better</label>
          </div>
        </div>
      </div>
    </p>
  );
}

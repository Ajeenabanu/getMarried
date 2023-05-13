import "./style.css";
import img from "./image/img.svg";
import logout from "./image/logout.png";
import { useNavigate, useSearchParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footers from "./Footers";

export default function Profile() {
  const location = useNavigate();

  function logoutin() {
    localStorage.clear();
    location("/");
  }

  const [person, setPerson] = useState([]);
  const [SearchParams] = useSearchParams();

  
  function toHome() {
    location("/");
  }
  function toSearch() {
    location("/Search");
  }

  useEffect(() => {
    const fetchdata = async () => {
      let id = SearchParams.get("id");
  
      const res = await axios.get(`http://localhost:5000/get-a-Profile/${id}`);
      setPerson(res.data.Person);
      console.log(res.data.Person);
    };
    fetchdata()
  }, [SearchParams]);

  return (
    <p>
      <div className="profile_head">
        <img alt="" src={img}></img>
        <p onClick={toHome}> MY HOME </p>
        <p onClick={toSearch}> SEARCH </p>
        <div className="profile_head_1">
          <img onClick={logoutin} alt="" src={logout} />
          <p className="tooltip">LogOut</p>
        </div>
      </div>

      <div className="profile_body">
        <div className="profile_body_2">
          <div className="profile_body_3">
            <img className="imagedesign" alt="noimage" src={person.image} />
          </div>
          <div className="profile_body_col">
            <h2>{person.name}</h2>
            <br></br>
            <div className="profile_body_co1_1">
              <div className="profile_body_co1_2">
                <div> Full Name : {person.name} </div>
                <p>Email Id : {person.email}</p>
                <p>Date OF Birth : {person.dob}</p>
                <p>Mother tongue : {person.mothertongue}</p>
                <p>Mobile : {person.mobile}</p>
                <p>Sex : {person.sex}</p>

              </div>
            </div>
          </div>
        </div>
        <div className="profile_body_div">
          <h1>About Me</h1>
          <label>{person.about}</label>
        </div>
      </div>
      <Footers />
    </p>
  );
}

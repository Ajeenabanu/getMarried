import "./style.css";
import seimg from "./image/searchimg.jpg";
import logout from "./image/logout.png"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Search() {
  const navi = useNavigate();

  function Profile() {
    navi("/Profile");
  }
  function logoutin() {
    localStorage.clear();
    navi("/");
  }

  const [allProfiles, setAllprofiles] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/get-allProfiles");
    setAllprofiles(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <p>
      <div className="mainbody">
        <img alt="" src={seimg}></img>
        <div className="mainbody_head_1">
                <img  onClick={logoutin}  alt="" src={logout} />
                <p>LogOut</p>
            </div>

          <div className="mainbody_div2">
            <input></input>
            <button>Search</button>
          </div>
        </div>
     

      <div className="mainbody1">
        <div onClick={Profile} className="mainbody1_div">
          <h1>Profiles</h1>
          <table id="styling" border={"1px"}>
            <thead>
              <tr  >
                <th id="styleheading">Name</th>
                <th id="styleheading">Mobile</th>
                <th id="styleheading">DOB</th>
                <th id="styleheading">Mothertongue</th>
                <th id="styleheading">Email</th>
                <th id="styleheading">sex</th>
              </tr>
            </thead>
            <tbody>
              {allProfiles.map((item) => (
                <tr>
                  <th id="styleheading">{item.name}</th>
                  <td id="styleheading">{item.mobile}</td>
                  <td id="styleheading">{item.dob}</td>
                  <td id="styleheading">{item.mothertongue}</td>
                  <td id="styleheading">{item.email}</td>
                  <td id="styleheading">{item.sex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </p>
  );
}

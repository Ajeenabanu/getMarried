import "./style.css";
import seimg from "./image/searchimg.jpg";
import logout from "./image/logout.png";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footers from "./Footers";

export default function Search() {
  const location = useNavigate();

  const [search,setSearch]=useState('')

  function aProfile(id) {
    location({
      pathname: "/Profile",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  }

  function logoutin() {
    localStorage.clear();
    location("/");
  }
  const [allProfiles, setAllprofiles] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/get-allProfiles");
    setAllprofiles(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <p>
      <div className="mainbody">
        <img alt="" src={seimg}></img>
        <div className="mainbody_head_1">
          <img onClick={logoutin} alt="" src={logout} />
          <p>LogOut</p>
        </div>

        <div className="mainbody_div2">
          <input  onChange={(e)=>setSearch(e.target.value)} placeholder="Serach Here"></input>
        </div>
      </div>

      <div className="mainbody1">
        <div className="mainbody1_div">
          <h1>Profiles</h1>
          <table id="styling">
            <thead>
              <tr>
                <th id="styleheading">Id</th>
                <th id="styleheading">Name</th>
                <th id="styleheading">Mobile</th>
                <th id="styleheading">sex</th>
              </tr>
            </thead>
            <tbody>
              {allProfiles.filter((item)=>{
                return search.toLowerCase()===''?item :item.name.toLowerCase().includes(search)
              }).map((item) => (
                <tr>
                  <th id="styleheading">{item.id}</th>
                  <th id="styleheading">{item.name}</th>
                  <td id="styleheading">{item.mobile}</td>
                  <td id="styleheading">{item.sex}</td>
                  <td id="styleheading">
                    <button
                      id={item.id}
                      onClick={(e) => {
                        var id = e.target.id;
                        aProfile(id);
                      }}
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footers/>
    </p>
  );
}

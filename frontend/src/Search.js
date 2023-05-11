import "./style.css";
import seimg from "./image/searchimg.jpg";
import logout from "./image/logout.png";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footers from "./Footers";

export default function Search() {
  const location = useNavigate();

  const [search, setSearch] = useState("");

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
        </div>

        

      <div className="mainbody1">
        <div className="mainbody1_div">
          <h1>Profiles</h1>
          {allProfiles
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item) => (
              <div className="profileview">
                <div className="profileviewdiv">
                <h3><i class="fa-solid fa-user-large"></i> {item.name}</h3>
                <div className="profiledetails">
                <p>id : {item.id}</p>
                <p>Gender : {item.sex}</p>
                <p>Date of Birth : {item.dob}</p>
                <button  id={item.id}
                onClick={(e) => {
                  var id = e.target.id;
                  aProfile(id);
                }}><i class="fa-solid fa-eye"></i>View Profile </button>
                </div>
                </div>
                
              </div>
            ))}
        </div>
      </div>
      <Footers />
    </p>
  );
}

import "./style.css"
import img from "./image/img.svg"
import logout from "./image/logout.png"
import logout1 from "./image/logout1.webp"
import { useNavigate } from "react-router-dom";
export default function Profile() {
    const navi = useNavigate();

    function logoutin() {
        localStorage.clear();
        navi("/");
      }
    return <p>
        <div className="profile_head">
            <img  alt="" src={img}></img>
            <a href="/Home"> MY HOME </a>
            <a href="/Search"> SEARCH </a>
            <div className="profile_head_1">
                <img  onClick={logoutin}  alt="" src={logout} />
                <p className="tooltip">LogOut</p>
            </div>
        </div>

        <div className="profile_body">
            <div className="profile_body_2">
                <div className="profile_body_3">
                    <img alt="" src={logout1} />
                </div>
                <div className="profile_body_col">
                    <h2>Aswathy AB</h2>
                    <label>E5939741 | Profile created by Self | Active - 1 week ago
                        <span>Verified</span></label>
                    <div className="profile_body_co1_1">
                        <div className="profile_body_co1_2">
                            <ul>
                                <li>27 years and 9 months, 4'7"</li>
                                <li>Mother Tongue is Malayalam</li>
                                <li>24 Manai Telugu Chettiyar</li>
                            </ul>
                        </div>
                        <div className="profile_body_co1_3">
                            <ul>
                                <li>27 years and 9 months, 4'7"</li>
                                <li>Mother Tongue is Malayalam</li>
                                <li>24 Manai Telugu Chettiyar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile_body_div">
                <h1>About Her</h1>
                <label>I belong to a middle class family with moderate values</label>
                <label> 27 years and 9 months, 4'7"</label>
            </div>
        </div>
    </p>
}
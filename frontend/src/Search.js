import "./style.css"
import img from "./image/img.svg"
import seimg from "./image/searchimg.jpg"
import logout from "./image/logout.png"
import logout1 from "./image/logout1.webp"
import { useNavigate } from "react-router-dom"
export default function Search() {
    const navi = useNavigate()
    function Profile() { navi("/Profile") }
    return <>

        <div className="mainbody">
            <img src={seimg}></img>
            <div className="mainbody_div">
                <div className="mainbody_div1">
                    <img src={img}></img>
                    <label> MY HOME </label>
                    <label> SEARCH </label>
                    <label> MATCHES </label>
                    <label> MAILBOX </label>
                    <label> UPGRADE NOW </label>
                    <div className="mainbody_div3">
                        <img class="logoutimg" src={logout}></img>
                    </div>
                </div>
                <div className="mainbody_div2">
                    <input></input>
                    <button>Search</button>
                </div>
            </div>
        </div>

        <div className="mainbody1" >
            <div onClick={Profile} className="mainbody1_div">
                {/* <div className="mainbody1_div1">
                    <img src={logout1}></img>
                    <div className="mainbody1_div2">
                        <div className="mainbody1_div3">
                            <h2>WTTR**</h2>
                        </div>
                        <div className="mainbody1_div3">
                            <label>26 Years, 5' 5"</label>
                            <label>BHMS</label>
                        </div>
                        <div className="mainbody1_div3">
                        <label>mumbai</label>
                            <label>Doctor</label>
                        </div>
                        <div className="mainbody1_div3">
                        <label>Hindu, Brahmin Bhumihar</label>
                            <label>₹ 0 - 1 Lakh</label>
                        </div>
                        <div className="mainbody1_div3">
                        <label>Hindi-UP/UK</label>
                            <label>Never Married</label>
                        </div>
                        
                    </div>
                </div> */}
                <div className="mainbody1_div_row">
                    <div className="mainbody_div_row_col1">
                        <img src={logout1} />

                    </div>
                    <div className="mainbody_div_row_col2">
                        <h2>WTTR**</h2>
                        <div className="mainbody_div_row_col2_inner">
                            <div className="mainbody_div_row_col2_inner_col">
                                <label>26 Years, 5' 5"</label>
                                <label>mumbai</label>
                                <label>Hindu, Brahmin <br></br>Bhumihar</label>
                                <label>Hindi-UP/UK</label>
                            </div>
                            <div className=" mainbody_div_row_col2_inner_col1">
                                <label>BHMS</label>
                                <label>Doctor</label>
                                <label>₹ 0 - 1 Lakh</label>
                                <label>Never Married</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mainbody1_div_row">
                    <div className="mainbody_div_row_col1">
                        <img src={logout1} />

                    </div>
                    <div className="mainbody_div_row_col2">
                        <h2>WTTR**</h2>
                        <div className="mainbody_div_row_col2_inner">
                            <div className="mainbody_div_row_col2_inner_col">
                                <label>26 Years, 5' 5"</label>
                                <label>mumbai</label>
                                <label>Hindu, Brahmin<br></br> Bhumihar</label>
                                <label>Hindi-UP/UK</label>
                            </div>
                            <div className=" mainbody_div_row_col2_inner_col1">
                                <label>BHMS</label>
                                <label>Doctor</label>
                                <label>₹ 0 - 1 Lakh</label>
                                <label>Never Married</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mainbody1_div_row">
                    <div className="mainbody_div_row_col1">
                        <img src={logout1} />

                    </div>
                    <div className="mainbody_div_row_col2">
                        <h2>WTTR**</h2>
                        <div className="mainbody_div_row_col2_inner">
                            <div className="mainbody_div_row_col2_inner_col">
                                <label>26 Years, 5' 5"</label>
                                <label>mumbai</label>
                                <label>Hindu, Brahmin <br></br>Bhumihar</label>
                                <label>Hindi-UP/UK</label>
                            </div>
                            <div className=" mainbody_div_row_col2_inner_col1">
                                <label>BHMS</label>
                                <label>Doctor</label>
                                <label>₹ 0 - 1 Lakh</label>
                                <label>Never Married</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mainbody1_div_row">
                    <div className="mainbody_div_row_col1">
                        <img src={logout1} />

                    </div>
                    <div className="mainbody_div_row_col2">
                        <h2>WTTR**</h2>
                        <div className="mainbody_div_row_col2_inner">
                            <div className="mainbody_div_row_col2_inner_col">
                                <label>26 Years, 5' 5"</label>
                                <label>mumbai</label>
                                <label>Hindu, Brahmin<br></br> Bhumihar</label>
                                <label>Hindi-UP/UK</label>
                            </div>
                            <div className=" mainbody_div_row_col2_inner_col1">
                                <label>BHMS</label>
                                <label>Doctor</label>
                                <label>₹ 0 - 1 Lakh</label>
                                <label>Never Married</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mainbody1_div_row">
                    <div className="mainbody_div_row_col1">
                        <img src={logout1} />

                    </div>
                    <div className="mainbody_div_row_col2">
                        <h2>WTTR**</h2>
                        <div className="mainbody_div_row_col2_inner">
                            <div className="mainbody_div_row_col2_inner_col">
                                <label>26 Years, 5' 5"</label>
                                <label>mumbai</label>
                                <label>Hindu, Brahmin<br></br> Bhumihar</label>
                                <label>Hindi-UP/UK</label>
                            </div>
                            <div className=" mainbody_div_row_col2_inner_col1">
                                <label>BHMS</label>
                                <label>Doctor</label>
                                <label>₹ 0 - 1 Lakh</label>
                                <label>Never Married</label>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
}
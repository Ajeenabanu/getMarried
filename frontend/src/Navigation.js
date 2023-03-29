import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Search from "./Search";
import Profile from "./Profile";
import {
  BrowserRouter,
  Routes,
  Route,
}
  from "react-router-dom";

export default function Navigation() {
  return <p>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Search" element={<Search/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>

  </p>
}
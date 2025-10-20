import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logout } = use(AuthContext)

  const handlelogout = () => {
    console.log('try to out')
    logout().then(() => {
      // Sign-out successful.
      alert('Logged Out Succesfull')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">     
        <img className="w-12 rounded-full h-10" src={`${user? user.photoURL : userLogo }`} alt="" />
        {
          user ? (<button onClick={handlelogout} className="btn btn-primary px-10 ">LogOut</button>) : (<Link to={'/auth/login'}>  <button className="btn btn-primary px-10 ">Login</button></Link>)
        }

      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import {ImFacebook} from 'react-icons/im';
import {VscTwitter} from 'react-icons/vsc';
import {AiOutlineInstagram,AiOutlineSearch,AiOutlineMail} from 'react-icons/ai';
import {FaPinterestP} from 'react-icons/fa';
import './Navbar.scss'
export const Navbar = () => {
    const [mobile,setmobile] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-f">
        <div className="socials">
        <img className="logo" src='Floral.jpg' alt='logo'/>
            <div className="social-icons"><ImFacebook/></div>
            <div className="social-icons"><VscTwitter/></div>
            <div className="social-icons"><AiOutlineInstagram/></div>
            <div className="social-icons"><FaPinterestP/></div>
            <div className="social-icons"><AiOutlineMail/></div>
            <div className="social-icons"><AiOutlineSearch/></div>
            
        </div>
        </div>
        <div className="navbar-div">
        <div className="navbar-items">
          <ul className="navbar-li-items">
            <li className="list-items">Home</li>
            <li className="list-items">Products</li>
            <li className="list-items">Blog</li>
            <li className="list-items">Track Order</li>
            <li className="list-items">Login</li>
          </ul>
          </div>
      </div>
    </div>
  );
};

import React from 'react'
import "./Footer.scss"
import {ImFacebook} from 'react-icons/im';
import {VscTwitter} from 'react-icons/vsc';
import {AiOutlineInstagram,AiOutlineSearch,AiOutlineMail} from 'react-icons/ai';
import {FaPinterestP} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className='Footer'>
    <div className='leftfooter'>
      <img src='Floral-bgr.png' alt='logo'/>
      <h2>Get Discounts on our newest collection</h2>
      <button>Subscribe</button>
      <div className='Socials'>
        <h2>Connect With us</h2>
        <div className="socialics"><ImFacebook/></div>
            <div className="socialics"><VscTwitter/></div>
            <div className="socialics"><AiOutlineInstagram/></div>
            <div className="socialics"><FaPinterestP/></div>
      </div>
    </div>
    <div className='midfooter'>
        <h1>midfooter</h1>
    </div>
    <div className='rightfooter'>
        <h1>rightfooter</h1>
    </div>
    </div>
    <div className='end'>
     <h1>Copyright Floral 2022</h1>
    </div>
    </>
  )
}

export default Footer
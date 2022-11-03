import React from 'react'
import leaf from './leaf.png'
import './WhyUs.scss'
const WhyUs = () => {
  return (
    <div className='whysec'>


      <div className='heading'>
      <img class='t-left' src={leaf}/>
      <h1 className='top'>Why Choose US</h1>
      <img class='t-right' src={leaf}/>
      </div>
      <div className='glass'>
        <h2 className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iusto perspiciatis, ipsa odit quisquam ipsam soluta eveniet nobis. Voluptas ratione dolor aperiam dolorem sequi natus veniam facilis a harum provident!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iusto perspiciatis, ipsa odit quisquam ipsam soluta eveniet nobis. Voluptas ratione dolor aperiam dolorem sequi natus veniam facilis a harum provident!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iusto perspiciatis, ipsa odit quisquam ipsam soluta eveniet nobis. Voluptas ratione dolor aperiam dolorem sequi natus veniam facilis a harum provident!</h2>
      </div>
      <div className='bottomsl'>
      <img class='d-left' src={leaf}/>
      <img class='d-right' src={leaf}/>
      </div>
     
      

      </div>
  )
}

export default WhyUs
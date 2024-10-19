import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";



const Scroll = () => {
  return (
    <div className='text-nion relative'>
       <div className='absolute top-96 left-5'>
       <div className='fixed'>
       <ul className='flex flex-col'>
            <li><FaInstagram /></li>
            <li><FaFacebook /></li>
            <li><FiGithub /></li>
            <li><SiFiverr /></li>
            <li><SiUpwork /></li>
        </ul>
       </div>
       </div>

     
    </div>
  )
}

export default Scroll
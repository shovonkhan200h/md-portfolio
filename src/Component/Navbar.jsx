import React from 'react'
import logo from '../assets/logo.png'
import { Links } from '../Constant'

const Navbar = () => {
  return (
    <div className='container mx-auto flex items-center py-5 backdrop-blur-3xl'>
        <div className='w-full'>
            <img src={logo} width={50}/>
        </div>

        <div className='w-full'>
           <ul className='flex justify-evenly'>
            {
                Links.map((item,id)=>{
                    return <li className='text-white'>{item.heading}</li>
                })
            }
           </ul>
        </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {GiBookStorm} from 'react-icons/gi'
import {TiContacts} from 'react-icons/ti'
import {FaIndianRupeeSign} from 'react-icons/fa'
import {LiaRupeeSignSolid} from 'react-icons/lia'
import {RiTeamFill} from 'react-icons/ri'
import  './sideNav.css'

export default function SideNav() {
    const[activeNav,setActiceNav] = useState('#')
    return (
      <div className='sideNav'>
      <a href='#' onClick={()=>setActiceNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiceNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#gallery' onClick={()=>setActiceNav('#gallery')} className={activeNav === '#about' ? 'active' : ''}><RiTeamFill/></a>
      <a href='#pricing' onClick={()=>setActiceNav("#pricing")} className={activeNav === '#experience' ? 'active' : ''}><LiaRupeeSignSolid /></a>
      <a href='#form' onClick={() => setActiceNav('#form')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts/></a>
        
      </div>
    )
}


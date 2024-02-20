import { useState } from 'react'

import {
    TiHomeOutline,
    TiWeatherDownpour,
    } from "react-icons/ti";
import { LiaSearchLocationSolid } from "react-icons/lia";
import { GrAnalytics } from "react-icons/gr";
import {
    IoCalendarOutline,
    IoSettingsOutline
    } from "react-icons/io5";



const Sidebar = () => {
    const [links, setLinks] = useState([
        {
            link: 'Home',
            icon: <TiHomeOutline />
        },
        {
            link: 'Forecast',
            icon: <TiWeatherDownpour />
        },
        {
            link: 'Analytics',
            icon: <GrAnalytics />
        },
        {
            link: 'Location',
            icon: <LiaSearchLocationSolid />
        },
        {
            link: 'Calendar',
            icon: <IoCalendarOutline />
        },
        {
            link: 'Settings',
            icon: <IoSettingsOutline />
        },
    ]) 
    



  return (
    <div className='Sidebar'>
        {
        links.map((item, i) => (
            <div key={i} className='SideLink'>
                <div className='Icon'>{item.icon}</div>
                <div className='Link'>{item.link}</div>
            </div>
        ))
        }
    </div>
  )
}

export default Sidebar
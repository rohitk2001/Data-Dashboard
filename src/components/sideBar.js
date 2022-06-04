//rfce shortcut to create template
import React from 'react';
import {SideBarData} from './sideBarData.js';
import './sidebar.css';
function SideBar() {
  return (
    <div className='Sidebar'>
        <ul className='SidebarList'>
            {SideBarData.map((val,key)=>{
                return (
                    <li 
                        className='row'
                        key={key} 
                        id = {window.location.pathname === val.link ? "active" : ""}
                        onClick={()=>{window.location.pathname = val.link}}>
                        <div id="title">
                            {val.title}
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SideBar
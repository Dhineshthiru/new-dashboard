import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/Dorustree-removebg-preview.png";
import { SidebarData } from "../Data/Data";


const Sidebar = () => {
  const [selected, setSelected]=useState(0);

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Dorus<span>tree</span>
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className={selected===index?'menuItem active':'menuItem'} key={index} onClick={()=>setSelected(index)}>
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItems">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="sign-out-alt"><path fill="#000000" d="M12.59,13l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H3a1,1,0,0,0,0,2ZM12,2A10,10,0,0,0,3,7.55a1,1,0,0,0,1.8.9A8,8,0,1,1,12,20a7.93,7.93,0,0,1-7.16-4.45,1,1,0,0,0-1.8.9A10,10,0,1,0,12,2Z"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { FaCaretDown } from 'react-icons/fa6';

const NavMenu = ({items}) => {
    const [activeSubMenu, setActiveSubMenu] = useState(false);
    const handleMouseEnter = ()=>{
        setActiveSubMenu(true);
    }
    const handleMouseLeave = ()=>{
        setActiveSubMenu(false);
    }
  return (
    <li key={items.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='group relative cursor-pointer'>
      <a
        href={items.link} className="inline-flex items-center px-4 py-2 border-[3px] border-transparent hover:text-primary hover:border-b-primary duration-200"
      >
        {items.name}
        {items.submenu && (
            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
        )}
      </a>
      {items.submenu && activeSubMenu && (
        <ul className="absolute w-[150px] rounded-md p-2 z-[9999] shadow-md bg-white dark:bg-gray-900 dark:text-white">
            {items.submenu.map((subItem)=>(
                <li key={subItem.id}>
                    <a href={subItem.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/35">{subItem.name}</a>
                </li>
            ))}
        </ul>
      )
      }
    </li>
  );
};

export default NavMenu;

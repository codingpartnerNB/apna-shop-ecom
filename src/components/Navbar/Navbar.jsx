import React from 'react'
import Logo from '../../assets/logo.png';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { Menu } from '../../data';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <header className='shadow-md bg-white dark:bg-gray-900 dark:text-white relative z-40'>
        {/* Upper Nav */}
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt='Logo' className='w-10' />
                        Apna Shop
                    </a>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input type='text' placeholder='Search' className='w-0 group-hover:w-[300px] group-hover:sm:w-[200px] focus:w-[300px] focus:sm:w-[200px] transition-all duration-300 rounded-full group-hover:border group-hover:border-gray-300 group-hover:px-2 group-hover:py-1 focus:px-2 focus:py-1 focus:outline-none focus:border-1 focus:border-primary dark:focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
                        <IoMdSearch className='text-gray-600 dark:text-gray-300 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
                    </div>
                    <button className='bg-gradient-to-r from-primary to-secondary py-1 px-4 hover:scale-105 duration-200 rounded-full'>
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                    </button>
                    <DarkMode />
                </div>
            </div>
        </div>
        {/* Lower Nav */}
        <nav className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
                {Menu.map((data, index)=>(
                    <NavMenu key={index} items={data} />
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

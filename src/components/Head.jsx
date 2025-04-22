import React from 'react'
import Hamburger from 'hamburger-react'
import Logo from '../assets/logo.png'
import { FaUser, FaSearch, FaMicrophone, FaVideo } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {

    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <header className='grid grid-cols-12 items-center px-4 py-2 bg-white shadow'>
            {/* Column 1: Hamburger and Logo */}
            <div className='flex items-center space-x-4 col-span-2'>
                <img src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
                 alt="Humberger" 
                 className='h-10' 
                 onClick={()=> toggleMenuHandler()}/>
                <img src={Logo} alt="Logo" className='h-10' />
            </div>

            {/* Column 2 & 3: Search Bar */}
            <div className='col-span-9'>
                <div className="flex w-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-grow border border-gray-300 px-3 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-4 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full">
                        <FaSearch className="text-gray-600" />
                    </button>
                    <div className='hidden md:flex items-center p-2 bg-gray-100 rounded-full'>
                        <FaMicrophone className="text-gray-600" />
                    </div>
                </div>
            </div>

            {/* Column 4: Right Icons */}
            <div className="flex items-center justify-end space-x-4 col-span-1">

                <button className="hidden md:block">
                    <FaVideo size={20} />
                </button>
                <FaUser size={24} />
            </div>
        </header>
    )
}

export default Head

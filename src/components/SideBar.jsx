import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {

   const isMenuOpen = useSelector(store=> store.app.isMenuOpen)

   //early return pattern
   if(!isMenuOpen) return null

    return (
        <div className='p-5 shadow-lg w-54 '>
            <ul>
                <li>Home</li>
                <li>Shots</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <br></br>
            <h1 className='font-bold'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <br></br>
            <h1 className='font-bold'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default SideBar

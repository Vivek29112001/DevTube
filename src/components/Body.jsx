import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col '>
      <SideBar />
      {/* <MainContainer /> */}
      <Outlet/>
    </div>
  )
}

export default Body

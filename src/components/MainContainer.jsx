import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-9 h-auto w-full overflow-x-scroll scrollbar-hide bg-gray-100 rounded-lg'>
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer

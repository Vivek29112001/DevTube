import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Button from './Button'

const list = [
  "All", "Music", "Mixes", "AirForces", "Live", "Gaming", "Songs", "Live",
  "Cricket", "Soccer", "Cooking", "News", "Sports", "Punjabi", "Playlists",
  "Genreal Knowledge", "Movies", "Documentaries", "Shorts", "Trending"
]

const ButtonsList = () => {
  const scrollRef = useRef(null)

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex items-center w-full">
      {/* Left Arrow */}
      <button
        onClick={() => scroll(-300)}
        className="hidden md:block shadow-md rounded-full p-2 mr-2"
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Buttons */}
      <div
        ref={scrollRef}
        className="flex flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth space-x-2 h-[60px] items-center"
      >
        {list.map((item, index) => (
          <Button key={index} item={item} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll(200)}
        className="hidden md:block shadow-md rounded-full p-2 ml-2"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}

export default ButtonsList

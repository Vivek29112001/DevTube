import React from 'react'

const Button = ({ item }) => {
  return (
    <button className="px-4 py-1 bg-gray-200 rounded-full hover:bg-gray-300 whitespace-nowrap">
      {item}
    </button>
  )
}

export default Button

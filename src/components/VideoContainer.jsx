import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/contants'
import VideoCard from './VideoCards'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY)
    const json = await data.json();
    setVideos(json.items)
  }

  return (
    <div className="px-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {videos.map(video => (
        <div key={video.id} className="w-full h-72">
          <VideoCard info={video} />
        </div>
      ))}
    </div>
  )
}

export default VideoContainer

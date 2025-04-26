import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../../utils/appSlice'

const WatchPage = () => {

    const [searchParams] = useSearchParams()
    console.log(searchParams.get('v'))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu()) 
    }, [])

    return (
        <div className='flex flex-row '>
            <div className='px-5 py-5'>
                <iframe
                    width="1001"
                    height="551"
                    src={"https://www.youtube.com/embed/" + searchParams.get('v')}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default WatchPage

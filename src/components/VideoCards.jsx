import React from 'react'

const formatViews = (views) => {
    const numViews = Number(views);
    if (!isNaN(numViews) && numViews >= 1000000) {
        return (numViews / 1000000).toFixed(1) + "M views";
    }
    return views + " views";
};

const formatPublishedAt = (publishedAt) => {
    const publishedDate = new Date(publishedAt);
    const now = new Date();
    const diffInSeconds = Math.floor((now - publishedDate) / 1000);

    if (diffInSeconds < 60) {
        return "Just now";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return diffInMinutes + " minute" + (diffInMinutes > 1 ? "s" : "") + " ago";
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return diffInHours + " hour" + (diffInHours > 1 ? "s" : "") + " ago";
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return diffInDays + " day" + (diffInDays > 1 ? "s" : "") + " ago";
};

const VideoCard = ({ info }) => {
    if (!info) return null;
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;

    return (
        <div className=" bg-white rounded-lg overflow-hidden shadow cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <img
                alt="thumbnail"
                src={thumbnails.medium.url}
                className="w-full object-cover"
            />
            <div className="px-4 py-3">
                <h3 className="text-sm font-bold text-gray-800 truncate mb-1">
                    {title}
                </h3>
                <p className="text-xs font-bold text-gray-500">{channelTitle}</p>

                <div className='flex gap-4 '>
                    <p className="text-xs font-bold text-gray-500 mt-1">{formatViews(statistics.viewCount)}</p>
                    <p className="text-xs font-bold text-gray-500 mt-1">{formatPublishedAt(publishedAt)}</p>
                </div>

            </div>
        </div>
    )
}

export default VideoCard

import React, { useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_CHANNEL_API } from "../../utils/constants";

function formatViews(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M views";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K views";
  } else {
    return number + " views";
  }
}
function timeAgo(date) {
  const now = new Date();
  const timeDiff = now - date;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return "few minutes ago";
  }
}

const VideoCard = ({ video }) => {
  console.log(video);
  const { snippet, statistics } = video;
  const { title, publishedAt, thumbnails, channelTitle, channelId } = snippet;
  const { viewCount } = statistics;

  

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API + channelId + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    console.log(jsondata);
  };

  return (
    <div className="p-2 m-2 w-[320px] w- border-2 shadow-lg text-wrap">
      <img
        src={thumbnails.medium.url}
        className="rounded-lg cursor-pointer"
        alt="thmbnail"
      />
      <ul>
        <li className="">{title}</li>
        <li className="">{channelTitle}</li>
        <div className="flex mt-2 font-light">
          <li className="">{timeAgo(new Date(publishedAt))}</li> &nbsp;
          <span>&#8226;</span> &nbsp;
          <li>{formatViews(viewCount)} </li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;

import React, { useEffect, useState } from "react";
import {
  GOOGLE_API_KEY,
  YOUTUBE_CHANNEL_API,
  formatViews,
  timeAgo,
} from "../../utils/constants";
import { Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  // console.log(video);
  const { snippet, statistics, id } = video;
  const { title, publishedAt, thumbnails, channelTitle, channelId } = snippet;
  const { viewCount } = statistics;

  const [channelLogo, setChannelLogo] = useState(null);

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API + channelId + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    // console.log(jsondata);
    setChannelLogo(jsondata.items[0].snippet.thumbnails.medium.url);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/watch?v=" + id);
  };

  return (
    <div className="p-2 m-2 w-[350px] border-2 shadow-lg text-wrap">
      <img
        src={thumbnails.medium.url}
        className="rounded-lg cursor-pointer"
        alt="thmbnail"
        onClick={handleClick}
      />
      <div className="grid grid-flow-col">
        <div className="col-span-2">
          <Tooltip title={channelTitle}>
            <img
              src={channelLogo}
              className="w-7 border-2 rounded-full mx-2 mt-1 cursor-pointer"
            />
          </Tooltip>
        </div>
        <ul className="col-span-10 mt-1">
          <li className="">{title}</li>
          <li className="">{channelTitle}</li>
          <div className="flex mt-2 font-light">
            <li>{formatViews(viewCount)} </li>&nbsp;
            <span>&#8226;</span> &nbsp;
            <li className="">{timeAgo(new Date(publishedAt))}</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;

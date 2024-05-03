import React, { useEffect, useState } from "react";
import {
  GOOGLE_API_KEY,
  VIDEO_BY_ID_API,
  YOUTUBE_CHANNEL_API,
  formatViews,
  timeAgo,
} from "../../utils/constants";

import { addChannel } from "../../utils/videoSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ResultVideoCard = ({ video }) => {
  console.log(video);
  const { snippet, id } = video;
  const { title, channelTitle, channelId, description } = snippet;
  const { url } = snippet?.thumbnails?.medium;

  useEffect(() => {
    getChannelDetails();
    getVideoDetails();
  }, []);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleNavigateToChannel = () => {
    const tt = dispatch(addChannel(channel));
    console.log(tt);
    navigate("/channel");
  };

  const handleClick = () => {
    navigate("/watch?v=" + id.videoId);
  };

  const [channel, setChannel] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  //   console.log(statistics);
  console.log(channel);

  const getChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API + channelId + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();

    // console.log("====================================");
    // console.log(jsondata);

    // console.log("====================================");
    setChannel(jsondata.items);
  };

  // console.log(channel[0]?.snippet?.thumbnails?.medium?.url);

  const getVideoDetails = async () => {
    console.log(id);
    const data = await fetch(
      VIDEO_BY_ID_API + id.videoId + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    // console.log(jsondata);
    setVideoDetails(jsondata.items[0]);
  };

  return (
    <div className="mx-2 my-3 flex">
      <img
        src={url}
        className="rounded-lg cursor-pointer transform scale-100 transition-transform ease-in-out hover:scale-110"
        onClick={handleClick}
      />
      <div className="px-4 py-1">
        <h1>{title}</h1>

        {videoDetails && (
          <h1 className="text-sm font-medium">
            {formatViews(videoDetails.statistics.viewCount)} &nbsp;&#8226;
            &nbsp;
            {timeAgo(new Date(videoDetails.snippet.publishedAt))}
          </h1>
        )}
        <br />
        {channel && (
          <div className="flex items-center">
            <img
              src={channel[0]?.snippet?.thumbnails?.medium?.url}
              alt="abrar"
              className="w-7 rounded-full mr-2 border-1 cursor-pointer"
              onClick={handleNavigateToChannel}
            />
            <h1>{channelTitle}</h1>
          </div>
        )}
        <h1 className=" font-light">{description}</h1>
      </div>
    </div>
  );
};

export default ResultVideoCard;

import React, { useEffect, useState } from "react";
import {
  GOOGLE_API_KEY,
  YOUTUBE_CHANNEL_API,
  formatLikes,
  formatViews,
  timeAgo,
} from "../../utils/constants";
import { Button, ButtonGroup } from "@mui/material";
import {
  Download,
  DownloadOutlined,
  ShareRounded,
  ThumbDownAltOutlined,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
  ThumbUpSharp,
} from "@mui/icons-material";
import URLDetector from "./ContentDetector";
import ContentDetector from "./ContentDetector";

const VideoDetails = ({ video }) => {
  console.log(video);
  const { snippet, statistics, id } = video[0];
  const {
    title,
    publishedAt,
    thumbnails,
    description,
    channelTitle,
    channelId,
  } = snippet;
  const { viewCount, likeCount } = statistics;

  const [channel, setChannel] = useState(null);

  useEffect(() => {
    getChannelDetails();
  }, [id]);

  const getChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API + channelId + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();

    setChannel(jsondata.items);
  };
  console.log(channel);

  let subscriberCount;
  if (channel && channel[0] && channel[0].statistics) {
    subscriberCount = channel[0].statistics.subscriberCount;
  } else {
    subscriberCount = null; // or any other default value you want
  }
  let url;
  if (
    channel &&
    channel[0] &&
    channel[0].snippet &&
    channel[0].snippet.thumbnails &&
    channel[0].snippet.thumbnails.default
  ) {
    url = channel[0].snippet.thumbnails.default.url;
  } else {
    url = null; // or any other default value you want
  }

  const [showFullDescription, setShowFullDescription] = useState(false);
  const shortDescriptionLimit = 200; // Set your desired character limit

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = showFullDescription
    ? description
    : description.slice(0, shortDescriptionLimit) +
      (description.length > shortDescriptionLimit ? "..." : "");

  return (
    <div className="m-2">
      <p className="text-lg font-bold">
        <ContentDetector content={title} />
      </p>
      <div className="flex  items-center my-2  justify-between">
        <div className=" justify-between flex items-center">
          <div className="flex">
            <img src={url} className="rounded-full w-11" />

            <div className="mx-1">
              <p className="font-bold">{channelTitle}</p>
              <p className="text text-xs">
                {formatLikes(subscriberCount)} subscribers
              </p>
            </div>
          </div>

          <div className="ml-5">
            <button className=" rounded-3xl bg-gray-800 text-white dark:bg-neutral-200 dark:text-neutral-800 py-2 px-3 text-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div className="justify-end flex">
          <div>
            <button className=" border-r-2 border-black rounded-l-3xl bg-gray-200 dark:bg-neutral-700 py-[6px] px-3 text-sm font-bold">
              <ThumbUpAltOutlined /> {formatLikes(likeCount)}
            </button>
            <button className=" border-black bg-gray-200 dark:bg-neutral-700 py-[6px] rounded-r-3xl px-3 text-sm font-bold">
              <ThumbDownOutlined />
            </button>
          </div>
          <div>
            <button className="py-[6px] mx-5 rounded-3xl px-3 bg-gray-200 dark:bg-neutral-700">
              <ShareRounded /> Share
            </button>
          </div>

          <div>
            <button className="py-[6px] rounded-3xl px-3 bg-gray-200 dark:bg-neutral-700">
              <Download /> Download
            </button>
          </div>
        </div>
      </div>

      <p>
        {formatViews(viewCount)} &nbsp; {timeAgo(publishedAt)}
      </p>

      {!showFullDescription && (
        <p
          className={`whitespace-pre-line bg-gray-300 dark:bg-neutral-700 rounded-lg p-2 ${
            showFullDescription ? "block" : "truncate"
          }`}
        >
          <ContentDetector content={shortDescription} />
        </p>
      )}
      {showFullDescription && (
        <p className="mt-2 whitespace-pre-line bg-gray-300 dark:bg-neutral-700 rounded-lg p-2">
          <ContentDetector content={description} />
        </p>
      )}
      <div className="justify-end items-end text-end">
        <button
          className="text-blue-500 hover:text-blue-700 cursor-pointer "
          onClick={toggleDescription}
        >
          {showFullDescription ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;

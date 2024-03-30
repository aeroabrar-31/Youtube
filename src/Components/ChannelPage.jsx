import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  COUNTRY_CODES,
  GOOGLE_API_KEY,
  PLAYLISTS,
  formatLikes,
} from "../utils/constants";
import { PlaylistPlayOutlined } from "@mui/icons-material";
import ContentDetector from "./CommentSection/ContentDetector";

const ChannelPage = () => {
  const channel = useSelector((store) => store.video.channel);
  console.log(channel);

  const { id, snippet, statistics } = channel?.[0];

  const { url } = snippet?.thumbnails?.medium;
  const { title, customUrl, description, country } = snippet;
  const { viewCount, subscriberCount, videoCount } = statistics;

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getPlaylist();
  }, []);

  const getPlaylist = async () => {
    const data = await fetch(PLAYLISTS + id + "&key=" + GOOGLE_API_KEY);
    const jsondata = await data.json();
    setPlaylists(jsondata.items);
  };

  const [showFullDescription, setShowFullDescription] = useState(false);
  const shortDescriptionLimit = 70; // Set your desired character limit

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = showFullDescription
    ? description
    : description.slice(0, shortDescriptionLimit) +
      (description.length > shortDescriptionLimit ? "..." : "");

  return (
    <div>
      <div className="flex items-center">
        <img src={url} className=" h-44 w-44 rounded-full" />
        <div className="mx-6">
          <p className="text-2xl font-bold my-2">{title}</p>
          <p>
            {customUrl} &#8226; {formatLikes(subscriberCount) + " subscribers "}{" "}
            &#8226;
            {videoCount} videos &#8226; {COUNTRY_CODES?.[country]}
          </p>
          <div className="my-2">
            {!showFullDescription && (
              <p
                className={`whitespace-pre-line  rounded-lg  ${
                  showFullDescription ? "block" : "truncate"
                }`}
              >
                <ContentDetector content={shortDescription} />
              </p>
            )}
            {showFullDescription && (
              <p className=" whitespace-pre-line  rounded-lg ">
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
          <button className=" rounded-3xl bg-gray-800 text-white py-2 px-3 text-sm">
            Subscribe
          </button>
        </div>
      </div>

      <h1>Playlists</h1>

      {playlists && (
        <div className="flex flex-wrap">
          {playlists.map((obj, ind) => {
            return (
              <div className="m-2 p-2 border w-64 ">
                <div className="relative -z-10">
                  <img
                    src={obj?.snippet?.thumbnails.medium.url}
                    className="w-64 h-32 rounded-xl cursor-pointer"
                  />
                  <p className="absolute bottom-0 right-0 opacity-80 mb-2 mr-2">
                    <span className="text-xs bg-black rounded-md font-semibold p-1 mr-1 text-white">
                      <PlaylistPlayOutlined /> {obj.contentDetails.itemCount}{" "}
                      videos
                    </span>
                  </p>
                </div>
                <p>{obj.snippet.title}</p>
                <p>View full playlist</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChannelPage;

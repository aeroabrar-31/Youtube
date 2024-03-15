import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { useVideos } from "../../hooks/useVideos";
import { useSelector } from "react-redux";
import VideosShimmer from "./VideosShimmer";

const VideoContainer = () => {
  useVideos();
  const videos = useSelector((store) => store.video.video);
  if (!videos) return <VideosShimmer />;
  return (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;

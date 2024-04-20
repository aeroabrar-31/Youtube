import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "../Body/VideoCard";
import RecommendedVideoCard from "./RecommendedVideoCard";
import { useVideos } from "../../hooks/useVideos";

const Recommended = () => {
  useVideos();
  const videos = useSelector((store) => store.video.video);

  return (
    <div className="h-full w-[32%] m-2 ">
      <p className="mx-2 font-bold">Recommended : </p>
      {videos.map((video, index) => {
        return video?.map((vid, i) => {
          return <RecommendedVideoCard key={i} video={vid} />;
        });
      })}
    </div>
  );
};

export default Recommended;

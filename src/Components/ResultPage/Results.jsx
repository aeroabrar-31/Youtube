import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, SEARCH_VIDEOS_API } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import ResultVideoCard from "./ResultVideoCard";
import Shimmer from "./Shimmer";

const Results = () => {
  const [params, setId] = useSearchParams();
  const keyword = params.get("search_query");
  const [videos, setVideos] = useState(null);
  console.log(keyword);
  useEffect(() => {
    setVideos(null);
    getVideos();
  }, [keyword]);

  const getVideos = async () => {
    const data = await fetch(
      SEARCH_VIDEOS_API + keyword + "&type=video&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    console.log(jsondata);
    setTimeout(() => {
      setVideos(jsondata.items);
    }, 5000);
  };

  if (!videos) {
    return <Shimmer />;
  }

  return (
    videos && (
      <div className="border-2 border-red-600 mx-[7%] my-5  w-full">
        {videos.map((video, index) => {
          return <ResultVideoCard key={index} video={video} />;
        })}
      </div>
    )
  );
};

export default Results;

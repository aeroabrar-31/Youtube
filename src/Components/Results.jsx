import React, { useEffect } from "react";
import { GOOGLE_API_KEY, SEARCH_VIDEOS_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const Results = () => {
  const [params, setId] = useSearchParams();
  const keyword = params.get("search_query");
  console.log(keyword);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      SEARCH_VIDEOS_API + keyword + "&type=video&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    console.log(jsondata);
  };

  return <div>Results</div>;
};

export default Results;

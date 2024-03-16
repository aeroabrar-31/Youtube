import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, VIDEO_BY_ID_API } from "../utils/constants";
import CommentsContainer from "./CommentSection/CommentsContainer";

const Watch = () => {
  const dispatch = useDispatch();

  const [params, setId] = useSearchParams();
  console.log(params.get("v"));

  const getVideoData = async () => {
    const data = await fetch(
      VIDEO_BY_ID_API + params.get("v") + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    console.log(jsondata);
  };

  useEffect(() => {
    dispatch(closeSideBar());
    console.log("in watch page closing bar");
    // getVideoData();
  }, []);

  return (
    <div className=" mx-2 my-1">
      <iframe
        width="1000"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          params.get("v") +
          "?playlist=" +
          params.get("v") +
          "&rel=0&loop=1&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allowFullScreen
      />
      <CommentsContainer video_id={params.get("v")} />
    </div>
  );
};

export default Watch;

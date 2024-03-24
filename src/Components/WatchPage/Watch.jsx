import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, VIDEO_BY_ID_API } from "../../utils/constants";
import CommentsContainer from "../CommentSection/CommentsContainer";
import LiveChat from "./LiveChat";
import Recommended from "./Recommended";

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
      <div className="flex w-full">
        <iframe
          className=" rounded-xl w-[73%] h-[550px]"
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
        <LiveChat />
      </div>
      <div className="flex">
        <CommentsContainer video_id={params.get("v")} />
        <Recommended />
      </div>
    </div>
  );
};

export default Watch;

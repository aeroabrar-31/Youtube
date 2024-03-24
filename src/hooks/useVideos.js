import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "../utils/constants";
import { addVideo } from "../utils/videoSlice";
import { useEffect } from "react";
import { StoreSharp } from "@mui/icons-material";

export const useVideos = () => {
  const dispatch = useDispatch();

  const videos = useSelector((store) => store.video.video);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API + "25&key=" + GOOGLE_API_KEY);
    const jsondata = await data.json();
    console.log(jsondata);
    dispatch(addVideo(jsondata.items));
  };

  useEffect(() => {
    if (videos.length == 0) getVideos();
  }, []);
};

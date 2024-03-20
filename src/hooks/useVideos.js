import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { addVideo } from "../utils/videoSlice";
import { useEffect } from "react";

export const useVideos = () => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsondata = await data.json();

    dispatch(addVideo(jsondata.items));
  };

  useEffect(() => {
    getVideos();
  }, []);
};

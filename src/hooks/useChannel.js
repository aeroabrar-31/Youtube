import React, { useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_CHANNEL_API } from "../utils/constants";

const useChannel = () => {
  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API + channelId + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    console.log(jsondata);
  };

  return <div>useChannel</div>;
};

export default useChannel;

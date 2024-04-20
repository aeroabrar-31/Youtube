import React, { useEffect, useState } from "react";
import {
  GOOGLE_API_KEY,
  YOUTUBE_CHANNEL_API,
  formatViews,
  timeAgo,
} from "../../utils/constants";
import { Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChannel } from "../../utils/videoSlice";

const VideoCard = ({ video }) => {
  // console.log(video);
  const { snippet, statistics, id } = video;
  const { title, publishedAt, thumbnails, channelTitle, channelId } = snippet;
  const { viewCount } = statistics;

  const [channelLogo, setChannelLogo] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    getChannelDetails();
  }, []);

  const reduceTitle = (title) => {
    if (title.length > 60) {
      title = title.substring(0, 60) + "...";
    }
    return title;
  };

  const getChannelDetails = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API + channelId + "&key=" + GOOGLE_API_KEY
    );
    const jsondata = await data.json();
    // console.log(jsondata);
    setChannel(jsondata.items);
    setChannelLogo(jsondata.items[0].snippet.thumbnails.medium.url);
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    const tt = dispatch(addChannel(channel));
    console.log(tt);
    navigate("/watch?v=" + id);
  };

  const handleNavigateToChannel = () => {
    const tt = dispatch(addChannel(channel));
    console.log(tt);
    navigate("/channel");
  };

  const [toggle, setToggle] = useState(null);

  const ttt = useSelector((store) => store.app.isToggleOpen);
  const width = ttt ? 350 : 370;
  const logosize = ttt ? 7 : 8;

  let imgUrl = thumbnails.medium.url;
  // if (ttt) {
  //   imgUrl = thumbnails.medium.url;
  // } else imgUrl = thumbnails.high.url;

  console.log(ttt);

  return (
    <div className="p-2 m-2  text-wrap w-[350px]">
      <img
        src={imgUrl}
        className="rounded-lg cursor-pointer transform scale-100 transition-transform ease-in-out hover:scale-110"
        alt="thmbnail"
        onClick={handleClick}
      />
      <div className="grid grid-flow-col mt-2">
        <div className="col-span-2 ">
          <Tooltip title={channelTitle}>
            <img
              src={channelLogo}
              className={`w-${7} border-2 rounded-full mx-2 mt-1 cursor-pointer`}
              onClick={handleNavigateToChannel}
            />
          </Tooltip>
        </div>
        <ul className="col-span-10 mt-1">
          <h1>{ttt}</h1>
          <li className="">{reduceTitle(title)}</li>
          <li className=" font-semibold">{channelTitle}</li>
          <div className="flex mt-2 font-light">
            <li>{formatViews(viewCount)} </li>&nbsp;
            <span>&#8226;</span> &nbsp;
            <li className="">{timeAgo(new Date(publishedAt))}</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;

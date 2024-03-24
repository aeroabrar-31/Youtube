import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendedVideoCard = ({ video }) => {
  const { snippet, id } = video;
  const { title, channelTitle, channelId, description } = snippet;
  const { url } = snippet?.thumbnails?.default;

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("/watch?v=" + id);
    navigate("/watch?v=" + id);
    // window.location.reload();
  };

  return (
    <div className="flex border-2 m-2">
      <img
        src={url}
        className="rounded-lg h-32 w-56 cursor-pointer"
        onClick={handleClick}
      />

      <div className="mx-2">
        <p className=" text-sm">{title}</p>
        <p className="my-1 font-bold">{channelTitle}</p>
      </div>
    </div>
  );
};

export default RecommendedVideoCard;

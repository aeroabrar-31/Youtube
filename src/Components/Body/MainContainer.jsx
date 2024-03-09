import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="border-red-800 border-2 p-4">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import VoiceSearch from "../VoiceSearch";

const MainContainer = () => {
  return (
    <div className="p-4">
      <ButtonsList />
      <VoiceSearch />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

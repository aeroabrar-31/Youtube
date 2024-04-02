import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import VoiceSearch from "../VoiceSearch";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const sidebar = useSelector((store) => store.app.isToggleOpen);

  return (
    <div className={`p-4 ${sidebar ? "w-full" : "w-[85%]"}`}>
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

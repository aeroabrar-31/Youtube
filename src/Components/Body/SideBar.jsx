import {
  FeedbackOutlined,
  HelpOutlineOutlined,
  Home,
  LiveTvOutlined,
  MovieCreationOutlined,
  MusicNoteOutlined,
  OutlinedFlag,
  PodcastsOutlined,
  SchoolOutlined,
  Settings,
  SettingsOutlined,
  ShoppingBagOutlined,
  SportsBarOutlined,
  SportsEsportsOutlined,
  Subscriptions,
  SubscriptionsOutlined,
  TheatersOutlined,
  WhatshotOutlined,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  let flag = useSelector((store) => store.app.isToggleOpen);

  if (flag) return null;
  return (
    <div className="p-2 w-40 shadow-lg">
      <ul className="px-1">
        <li className=" p-2  flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <Home /> &nbsp;Home
        </li>
        <li className=" p-2  flex hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <SubscriptionsOutlined /> &nbsp;Subscriptions
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <TheatersOutlined /> &nbsp;Shorts
        </li>
      </ul>
      <br />
      <Divider />
      <br />
      <h1 className="font-semibold p-2">Explore</h1>
      <ul className="px-1">
        <li className=" p-2  flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <WhatshotOutlined /> &nbsp;Trending
        </li>
        <li className=" p-2  flex hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <ShoppingBagOutlined /> &nbsp;Shopping
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <MusicNoteOutlined /> &nbsp;Music
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <SportsEsportsOutlined /> &nbsp;Gaming
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <MovieCreationOutlined /> &nbsp;Movies
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <SchoolOutlined /> &nbsp;Learning
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <LiveTvOutlined /> &nbsp;Live
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <PodcastsOutlined /> &nbsp;Podcasts
        </li>
      </ul>
      <br />
      <Divider />
      <br />
      <ul className="px-1">
        <li className=" p-2  flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <SettingsOutlined /> &nbsp;Settings
        </li>
        <li className=" p-2  flex hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <OutlinedFlag /> &nbsp;Report
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <FeedbackOutlined /> &nbsp;Feedback
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 hover:rounded-lg cursor-pointer">
          <HelpOutlineOutlined /> &nbsp;Help
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

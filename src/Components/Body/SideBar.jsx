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
import { categories } from "../../utils/constants";
import { Link } from "react-router-dom";

const SideBar = () => {
  let flag = useSelector((store) => store.app.isToggleOpen);

  if (flag) return null;
  return (
    <div className="p-2 w-[15%] shadow-lg">
      <ul className="px-1">
        <li className=" p-2  flex  hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg cursor-pointer">
          <Home /> &nbsp;Home
        </li>
        <li className=" p-2  flex hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg cursor-pointer">
          <SubscriptionsOutlined /> &nbsp;Subscriptions
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg cursor-pointer">
          <TheatersOutlined /> &nbsp;Shorts
        </li>
      </ul>
      <br />
      <Divider />
      <br />
      <h1 className="font-semibold p-2">Explore</h1>
      <ul className="px-1">
        {categories.map((category, index) => (
          <Link to={"results?search_query=" + category.text}>
            <li
              key={index}
              className="p-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg cursor-pointer"
            >
              {category.icon} &nbsp;{category.text}
            </li>
          </Link>
        ))}
      </ul>
      <br />
      <Divider />
      <br />
      <ul className="px-1">
        <li className=" p-2  flex  hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg cursor-pointer">
          <SettingsOutlined /> &nbsp;Settings
        </li>
        <li className=" p-2  flex hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg cursor-pointer">
          <OutlinedFlag /> &nbsp;Report
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg cursor-pointer">
          <FeedbackOutlined /> &nbsp;Feedback
        </li>
        <li className=" p-2 flex  hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg cursor-pointer">
          <HelpOutlineOutlined /> &nbsp;Help
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

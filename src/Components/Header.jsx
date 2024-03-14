import {
  Menu,
  Mic,
  Notifications,
  VideoCallRounded,
} from "@mui/icons-material";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  // const navigate = useNavigate();

  const handlHome = () => {};

  return (
    <div className="p-2 shadow-lg mb-2 mt-1 grid grid-flow-col sticky top-0 bg-white">
      <div className="flex col-span-1">
        <Menu
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the background color as needed
              borderRadius: "50%", // Set the border-radius to create a circular background
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
            },
            marginLeft: "4px",
          }}
          onClick={handleToggle}
        />

        <img
          className="h-5 ml-4 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtube-logo"
          onClick={handlHome}
        />
      </div>

      <div className="col-span-10 text-center">
        <input
          type="text"
          className="border-2 border-gray-300 p-1 w-1/2  rounded-l-full"
          placeholder="Search"
        />
        <button className="border-2  border-gray-300 px-2 bg-slate-300 py-1 rounded-r-full">
          🔍
        </button>
        <Tooltip title="Search with voice">
          <Mic
            sx={{
              cursor: "pointer",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the background color as needed
                borderRadius: "50%", // Set the border-radius to create a circular background
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          />
        </Tooltip>
      </div>

      <div className="flex col-span-1 text-center justify-between">
        <Tooltip title="Create">
          <VideoCallRounded
            sx={{
              cursor: "pointer",
              width: "35px",
              height: "32px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the background color as needed
                borderRadius: "50%", // Set the border-radius to create a circular background
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          />
        </Tooltip>
        <Tooltip title="Notifications">
          <Notifications
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the background color as needed
                borderRadius: "50%", // Set the border-radius to create a circular background
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          />
        </Tooltip>
        <Avatar
          sx={{
            cursor: "pointer",
            width: "30px",
            height: "30px",
          }}
        >
          A
        </Avatar>
      </div>
    </div>
  );
};

export default Header;

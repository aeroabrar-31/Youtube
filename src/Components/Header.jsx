import {
  Menu,
  Mic,
  Notifications,
  NotificationsOutlined,
  Search,
  VideoCallOutlined,
  VideoCallRounded,
} from "@mui/icons-material";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleToggle = () => {
    dispatch(toggle());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  // console.log(searchQuery);

  useEffect(() => {
    // console.log(searchQuery);

    const timer = setTimeout(() => {
      getVideoSuggestions(searchQuery);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getVideoSuggestions = async (searchQuery) => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const jsondata = await data.json();
    console.log(jsondata);
    setSuggestions(jsondata[1]);
  };

  const handleResult = (data) => {
    console.log("click res");
    setSearchQuery(data);
    navigate("results?search_query=" + data);
    setFocus(false);
  };

  const handleFormSubmit = (event) => {
    console.log("click res");
    event.preventDefault();
    if (searchQuery.length == 0) return;
    navigate("results?search_query=" + searchQuery);
    setFocus(false);
  };

  const handlHome = () => {
    navigate("/");
  };

  return (
    <div className="p-2 shadow-lg mb-2 mt-1 grid grid-flow-col sticky top-0 bg-white items-center">
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

      <div className="col-span-10 ">
        <div className="">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="border-2 border-gray-300 p-1 w-1/2  rounded-l-full"
              placeholder="Search"
              value={searchQuery}
              onFocus={() => setFocus(true)}
              // onBlur={() => setFocus(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
              type="submit"
              className="border-2  border-gray-300 px-2 bg-slate-300 py-1 rounded-r-full"
            >
              <Search />
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
          </form>
        </div>
        {focus && suggestions.length > 0 && (
          <div className="fixed bg-white border-2 border-black shadow-lg rounded-lg">
            <ul>
              {suggestions.map((data) => {
                return (
                  <li
                    className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleResult(data)}
                  >
                    <Search /> {data}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-1 text-center justify-between">
        <Tooltip title="Create">
          <VideoCallOutlined
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
          <NotificationsOutlined
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

import {
  Clear,
  ClearAll,
  DarkModeOutlined,
  Feedback,
  Google,
  Help,
  Language,
  LightModeOutlined,
  Logout,
  Mic,
  Notifications,
  NotificationsOutlined,
  Search,
  Settings,
  ShopTwo,
  SwitchAccount,
  Translate,
  VideoCallOutlined,
  VideoCallRounded,
  YouTube,
} from "@mui/icons-material";
import Menuicon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  MenuItem,
  Menu,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme, toggle } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import VoiceSearch from "./VoiceSearch";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleToggle = () => {
    dispatch(toggle());
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    handleClose();
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

  const handleOpenModal = () => {
    setOpen(true);
  };

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  console.log(theme);

  const handleDarkLight = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    dispatch(changeTheme());
  };

  // const [focus, setFocus] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const originalPlaceholder = "Search";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // if (!focus) return;
      setPlaceholder((prev) => {
        if (index === originalPlaceholder.length) {
          clearInterval(interval);
          return originalPlaceholder;
        }
        index++;
        return originalPlaceholder.substring(0, index) + "_";
      });
    }, 100);

    return () => clearInterval(interval);
  }, [focus]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="p-2 shadow-lg mb-2 z-50 grid grid-flow-col sticky top-0 bg-white dark:bg-neutral-900   items-center">
      <div className="flex col-span-1">
        <Menuicon
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
          className="h-5 dark:h-7 dark:w-[120px] ml-4 cursor-pointer"
          // src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          // src="https://download.logo.wine/logo/YouTube/YouTube-White-Full-Color-Logo.wine.png"
          // src="https://res.cloudinary.com/dstisc5f4/image/upload/f_auto,q_auto/zq1lhmozbp86cutxkmk4"
          src={
            theme === "dark"
              ? "https://res.cloudinary.com/dstisc5f4/image/upload/f_auto,q_auto/zq1lhmozbp86cutxkmk4"
              : "https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          }
          alt="youtube-logo"
          onClick={handlHome}
        />
      </div>

      <div className="col-span-10 ">
        <div className="text-center ">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="border-2 border-gray-300 pl-5   dark:bg-neutral-900 p-1 w-1/2  rounded-l-full"
              placeholder={"Search.."}
              value={searchQuery}
              onFocus={() => setFocus(true)}
              // onBlur={() => setFocus(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
              type="submit"
              className="border-2  border-gray-300 px-2 bg-slate-300 dark:bg-slate-900 py-1 rounded-r-full"
            >
              <Search />
            </button>
            <Tooltip title="Search with voice">
              <Mic
                onClick={handleOpenModal}
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
          <div className="fixed z-10 bg-white w-1/2 dark:bg-neutral-800 dark:border-white border-2 border-black shadow-lg rounded-lg">
            <ul>
              {suggestions.map((data) => {
                return (
                  <li
                    className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-neutral-600 dark:text-white cursor-pointer"
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
        {theme === "dark" ? (
          <Tooltip title="Light mode">
            <LightModeOutlined
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the background color as needed
                  borderRadius: "50%", // Set the border-radius to create a circular background
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={handleDarkLight}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Dark mode">
            <DarkModeOutlined
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the background color as needed
                  borderRadius: "50%", // Set the border-radius to create a circular background
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={handleDarkLight}
            />
          </Tooltip>
        )}
        <Avatar
          sx={{
            cursor: "pointer",
            width: "30px",
            height: "30px",
          }}
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleMenu}
        >
          A
        </Avatar>

        <Menu
          id="basic-menu"
          open={openMenu}
          onClose={handleCloseMenu}
          anchorEl={anchorEl}
          // onClose={handleClose}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          // sx={{
          //   backgroundColor: theme === "dark" ? "gray" : "white",
          // }}
        >
          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <Google className="w-4 h-4 mr-2" />
            <span className="text-sm">Google Account</span>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <SwitchAccount className="w-4 h-4 mr-2" />
            <span className="text-sm">Switch Account</span>
          </MenuItem>
          <MenuItem onClick={openDialog} className="flex items-center">
            <Logout className="w-4 h-4 mr-2" />
            <span className="text-sm">Sign out</span>
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <YouTube className="w-4 h-4 mr-2" />
            <span className="text-sm">Youtube Studio</span>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <ShopTwo className="w-4 h-4 mr-2" />
            <span className="text-sm">Purchases</span>
          </MenuItem>

          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <Translate className="w-4 h-4 mr-2" />
            <span className="text-sm">Language</span>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <Language className="w-4 h-4 mr-2" />
            <span className="text-sm">Location</span>
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            <span className="text-sm">Settings</span>
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <Help className="w-4 h-4 mr-2" />
            <span className="text-sm">Help</span>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} className="flex items-center">
            <Feedback className="w-4 h-4 mr-2" />
            <span className="text-sm">Feedback</span>
          </MenuItem>
        </Menu>
      </div>
      <Dialog open={dialogOpen}>
        <DialogTitle>Do you really want to Logout ?</DialogTitle>
        <DialogActions>
          <Button
            sx={{ textTransform: "none" }}
            color="primary"
            variant="contained"
            onClick={closeDialog}
          >
            Cancel
          </Button>
          <Button
            sx={{ textTransform: "none" }}
            variant="contained"
            color="error"
            // onClick={handleLogout}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        // sx={{ maxWidth: "27%", marginLeft: "36%" }}
      >
        <DialogTitle>
          Speak clearly and loudly{" "}
          <IconButton aria-label="close" onClick={handleClose}>
            <Clear sx={{ color: "red" }} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <VoiceSearch></VoiceSearch>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
